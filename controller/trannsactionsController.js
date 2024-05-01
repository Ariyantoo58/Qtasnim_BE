const { Op } = require("sequelize");
const { detail, transaksi, products } = require("../models");
const sequelize = require("sequelize");

const ProductsConntroller = {
	async index(req, res) {
		const { query, sort, type, picker } = req.query;
		try {
			const get = await detail.findAll({
				order: [
					[
						sort ? (sort === "name" ? "product" : "transaksi") : "transaksi",
						sort ? sort : "tanggal",
						type ? type : "ASC",
					],
				],
				include: [
					{
						association: "product",
						where: {
							name: {
								[Op.like]: `%${query ? query : ""}%`,
							},
						},
					},
					{
						association: "transaksi",
						// where: {
						// 	tanggal: {
						// 		[Op.lt]: new Date(picker),
						// 	},
						// },
					},
				],
			});
			return res.send({
				status: true,
				data: get,
			});
		} catch (error) {
			return res.status(400).send({
				status: false,
				data: error.message,
			});
		}
	},
	async add(req, res) {
		const { value, label, stock, jumlah } = req.body;

		try {
			const resTransaksi = await transaksi.create({
				tanggal: new Date(),
				lastStok: stock,
			});
			const updateProduct = await products.update(
				{
					stok: stock - jumlah,
				},
				{
					where: {
						id: parseInt(value),
					},
				}
			);
			const ObjData = {
				jumlah: jumlah,
				productId: value,
				transaksiId: resTransaksi.id,
			};

			const get = await detail.create(ObjData);
			return res.send({
				status: true,
				data: get,
			});
		} catch (error) {
			return res.status(400).send({
				status: false,
				data: error.message,
			});
		}
	},
	async earse(req, res) {
		const { id } = req.params;

		try {
			const get = await detail.findOne({
				where: {
					id: id,
				},
			});
			const TransDel = await transaksi.destroy({
				where: {
					id: get.transaksiId,
				},
			});
			const dataDel = await detail.destroy({
				where: {
					id: id,
				},
			});
			return res.send({
				status: true,
				data: dataDel,
			});
		} catch (error) {
			return res.status(400).send({
				status: false,
				data: error.message,
			});
		}
	},
	async edit(req, res) {
		const { id } = req.params;
		const { jumlah, productId } = req.body;

		try {
			const get = await detail.update(
				{
					jumlah: jumlah,
					productId: productId,
				},
				{
					where: {
						id: parseInt(id),
					},
				}
			);
			return res.send({
				status: true,
				data: get,
			});
		} catch (error) {
			return res.status(400).send({
				status: false,
				data: error.message,
			});
		}
	},
	async group(req, res) {
		const { type, from, to } = req.query;
		const data = ["2020-04-30T17:00:00.000Z", "2030-06-07T17:00:00.000Z"];
		try {
			const get = await detail.findAll({
				attributes: [
					"productId",
					[
						sequelize.fn(type ? type : "MAX", sequelize.col("jumlah")),
						`jumlah`,
					],
				],
				group: ["productId"],
				include: [
					{
						association: "product",
					},
					{
						association: "transaksi",
						where: {
							tanggal: {
								[Op.and]: {
									[Op.gte]: from ? new Date(from) : new Date(data[0]),
									[Op.lte]: to ? new Date(to) : new Date(data[1]),
								},
							},
						},
					},
				],
			});
			return res.send({
				status: true,
				data: get,
			});
		} catch (error) {
			return res.status(400).send({
				status: false,
				data: error.message,
			});
		}
	},
};

module.exports = ProductsConntroller;

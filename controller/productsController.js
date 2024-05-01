const { detail, transaksi, products } = require("../models");

const ProductsConntroller = {
	async index(req, res) {
		try {
			const get = await products.findAll({});
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
		const { name, stock, jenis } = req.body;

		try {
			const get = await products.create({
				name: name,
				stok: stock,
				jenis: jenis,
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
	async earse(req, res) {
		const { id } = req.params;

		try {
			const get = await products.destroy({
				where: {
					id: id,
				},
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
	async edit(req, res) {
		const { id } = req.params;
		const { name, stock, jenis } = req.body;

		try {
			const get = await products.update(
				{
					name: name,
					stok: stock,
					jenis: jenis,
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
	async migrate(req, res) {
		const DataProducts = [
			{
				id: 23,
				name: "Kopi",
				stok: 75,
				createdAt: "2024-05-01 12:13:46",
				updatedAt: "2024-05-01 12:33:27",
				jenis: "konsumsi",
			},
			{
				id: 24,
				name: "Teh",
				stok: 76,
				createdAt: "2024-05-01 12:13:53",
				updatedAt: "2024-05-01 12:34:38",
				jenis: "konsumsi",
			},
			{
				id: 25,
				name: "Pasta Gigi",
				stok: 80,
				createdAt: "2024-05-01 12:14:17",
				updatedAt: "2024-05-01 12:33:41",
				jenis: "pembersih",
			},
			{
				id: 26,
				name: "Sabun Mandi",
				stok: 70,
				createdAt: "2024-05-01 12:14:45",
				updatedAt: "2024-05-01 12:34:19",
				jenis: "pembersih",
			},
			{
				id: 27,
				name: "Sampo",
				stok: 75,
				createdAt: "2024-05-01 12:15:00",
				updatedAt: "2024-05-01 12:34:28",
				jenis: "pembersih",
			},
		];
		const DataTransaksi = [
			{
				id: 46,
				tanggal: "2024-05-12 12:34:38",
				createdAt: "2024-05-12 12:34:38",
				updatedAt: "2024-05-12 12:34:38",
				lastStok: 81,
			},
			{
				id: 45,
				tanggal: "2024-05-12 12:34:28",
				createdAt: "2024-05-12 12:34:28",
				updatedAt: "2024-05-12 12:34:28",
				lastStok: 100,
			},
			{
				id: 44,
				tanggal: "2024-05-11 12:34:19",
				createdAt: "2024-05-11 12:34:19",
				updatedAt: "2024-05-11 12:34:19",
				lastStok: 100,
			},
			{
				id: 42,
				tanggal: "2024-05-11 12:33:41",
				createdAt: "2024-05-11 12:33:41",
				updatedAt: "2024-05-11 12:33:41",
				lastStok: 100,
			},
			{
				id: 41,
				tanggal: "2024-05-10 12:33:27",
				createdAt: "2024-05-10 12:33:27",
				updatedAt: "2024-05-10 12:33:27",
				lastStok: 90,
			},
			{
				id: 40,
				tanggal: "2024-05-05 12:33:18",
				createdAt: "2024-05-05 12:33:18",
				updatedAt: "2024-05-05 12:33:18",
				lastStok: 100,
			},
			{
				id: 39,
				tanggal: "2024-05-01 12:33:09",
				createdAt: "2024-05-01 12:33:09",
				updatedAt: "2024-05-01 12:33:09",
				lastStok: 100,
			},
		];
		const DataDetail = [
			{
				id: 38,
				jumlah: 10,
				productId: 23,
				transaksiId: 39,
				createdAt: "2024-05-01 12:33:09",
				updatedAt: "2024-05-01 12:33:09",
			},
			{
				id: 39,
				jumlah: 19,
				productId: 24,
				transaksiId: 40,
				createdAt: "2024-05-01 12:33:18",
				updatedAt: "2024-05-01 12:33:18",
			},
			{
				id: 40,
				jumlah: 15,
				productId: 23,
				transaksiId: 41,
				createdAt: "2024-05-01 12:33:27",
				updatedAt: "2024-05-01 12:33:27",
			},
			{
				id: 41,
				jumlah: 20,
				productId: 25,
				transaksiId: 42,
				createdAt: "2024-05-01 12:33:41",
				updatedAt: "2024-05-01 12:33:41",
			},
			{
				id: 43,
				jumlah: 30,
				productId: 26,
				transaksiId: 44,
				createdAt: "2024-05-01 12:34:19",
				updatedAt: "2024-05-01 12:34:19",
			},
			{
				id: 44,
				jumlah: 25,
				productId: 27,
				transaksiId: 45,
				createdAt: "2024-05-01 12:34:28",
				updatedAt: "2024-05-01 12:34:28",
			},
			{
				id: 45,
				jumlah: 5,
				productId: 24,
				transaksiId: 46,
				createdAt: "2024-05-01 12:34:38",
				updatedAt: "2024-05-01 12:34:38",
			},
		];

		try {
			const postProduct = await products.bulkCreate(DataProducts);
			const PostTransaksi = await transaksi.bulkCreate(DataTransaksi);
			const PostDetail = await detail.bulkCreate(DataDetail);
			return res.send({
				status: true,
				data: { postProduct, PostTransaksi, PostDetail },
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

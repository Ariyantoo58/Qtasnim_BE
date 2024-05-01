"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("details", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			jumlah: {
				type: Sequelize.INTEGER,
			},
			productId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "products",
					key: "id",
				},
				onDelete: "cascade",
				onUpdate: "cascade",
			},
			transaksiId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "transaksi",
					key: "id",
				},
				onDelete: "cascade",
				onUpdate: "cascade",
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("details");
	},
};

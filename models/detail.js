"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class detail extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			detail.belongsTo(models.products, { foreignKey: "productId" });
			detail.belongsTo(models.transaksi, { foreignKey: "transaksiId" });
		}
	}
	detail.init(
		{
			jumlah: DataTypes.INTEGER,
			productId: DataTypes.INTEGER,
			transaksiId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "detail",
		}
	);
	return detail;
};

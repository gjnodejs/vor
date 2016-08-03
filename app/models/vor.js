'use strict';

module.exports = function(sequelize, DataTypes) {

	var Vor = sequelize.define('Vor', {
			subject: DataTypes.STRING,
			description: DataTypes.TEXT,
            tags : DataTypes.TEXT,
            isActive : DataTypes.BOOLEAN
		},
		{
			associate: function(models){
				Vor.belongsTo(models.User);
			}
		}
	);

	return Vor;
};

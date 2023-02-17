const pool = require('../database')

exports.getCompetitors = (req, res, next) => {
    const stationId = req.params.stationId;
    var myStation;
    try{
        const sqlQuery = 'SELECT stations.location_x,stations.location_y,stations.name,prices.value,brands.name FROM stations \
        INNER JOIN prices on prices.cre_id=stations.cre_id \
        INNER JOIN stations_brand on stations_brands.cre_id=stations.cre_id \
        INNER JOIN brands on stations_brands.id_brand = brands.id \
        where stations.cre_id=?';
        const rows = await pool.query(sqlQuery,stationId);
        myStation = rows;
        res.status(200).json(rows);
    } catch(error){
        
    }
}
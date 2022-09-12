const { Router } = require("express");
const { Activity, Country } = require("../db")
const router = Router();

router.post('/', async (req, res, next) => {
    // Hago destructuring de la data mandada por body
    try {
        const { name, difficulty, duration, season, countries } = req.body;
        if (name && difficulty && duration && season) {
            const activityId = await Activity.create({
                name,
                difficulty,
                duration,
                season
            });

            countries.forEach(async (e) => {
                const countryDb = await Country.findOne({
                    where: {
                        idApi: e,
                    },
                });
                await activityId.addCountry(countryDb);
            });
            res.status(200).json(activityId);
        } else {
            res.send("Faltan parametros para las actividades");
        }
    } catch (error) {
        console.log(error, "<= aca taaa");
    }
});

router.get("/", async (req, res) => {
    let activities = [];
    return Activity.findAll()
        .then((acts) => {
            acts.forEach((act) => activities.push(act.name));
            res.send(activities);
        })
        .catch((error) => {
            res.status(404).send(error);
        });
});

router.get('/:idActivity', async (req, res) => {
    try {
        const { idActivity } = req.params;
        const activity = await Activity.findByPk(idActivity, {
            include: {
                model: Country,
            }
        });
        res.json(activity ? activity : []);
    } catch (e) {
        res.send(e);
    }
});








/* const crearActividad = async (name, difficulty, duration, season, idPais) => {
    try {
        const act = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        await act.addCountry(idPais)
        console.log("Actividad: " + nombre + " agregada al pais " + idPais);
    } catch (e) {
        console.log(e);
    }
}

router.post('/', async (req, res, next) => {
    try {
        const { name, difficulty, duration, season, idPais } = req.body;

        if (name && difficulty && duration && season && idPais.length > 0) {
            idPais.forEach((e) => {
                crearActividad(name, difficulty, duration, season, e)
            })

            return res.status(201).json({
                msg: `Actividad '${nombre}' creada correctamente!`
            });
        }
        else {
            return res.status(404).send({
                error: "Faltan algunos campos para agregar la actividad"
            })
        }

    } catch (error) {
        next(error)
    }
}) */


/* router.get("/", async (req, res) => {
    let activities = [];
    return Activity.findAll()
        .then((acts) => {
            acts.forEach((act) => activities.push(act.name));
            res.send(activities);
        })
        .catch((error) => {
            res.status(404).send(error);
        });
});
 */
module.exports = router;
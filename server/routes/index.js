const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const adminCtrl = require("../controllers/admin");
const clientCtrl = require("../controllers/client");
const busCtrl = require("../controllers/bus");
const tripCtrl = require("../controllers/trip");
const reservationCtrl = require("../controllers/reservation");
const { protect } = require("../middlewares/adminmiddleware");     
 

// user routes
router.get("/api/user", userCtrl.apiGetAllusers);
router.post("/api/user/login", userCtrl.apiCheckuser);
router.post("/api/user/register", userCtrl.apiCreateuser);
// router.get("/api/user/:id", userCtrl.apiGetuserById);
router.put("/api/user/:id", userCtrl.apiUpdateuser);
router.delete("/api/user/:id", userCtrl.apiDeleteuser); 

// admin routes
router.get("/api/admin",adminCtrl.apiGetAlladmins);
router.post("/api/admin/login", adminCtrl.apiCheckadmin);
router.post("/api/admin/register",adminCtrl.apiCreateadmin);
router.get("/api/admin/:id", adminCtrl.apiGetadminById);
router.put("/api/admin/:id", adminCtrl.apiUpdateadmin);
router.delete("/api/admin/:id", adminCtrl.apiDeleteadmin); 


// client routes
router.get("/api/client", clientCtrl.apiGetAllclients);
router.post("/api/client/login", clientCtrl.apiCheckclient);
router.post("/api/client/register",clientCtrl.apiCreateclient);
router.get("/api/client/:id", clientCtrl.apiGetclientById);
router.put("/api/client/:id", clientCtrl.apiUpdateclient);
router.delete("/api/client/:id", clientCtrl.apiDeleteclient); 


// bus routes
router.get("/api/bus", busCtrl.apiGetAllbuss);
router.post("/api/bus/check", busCtrl.apiCheckbus);
router.post("/api/bus",busCtrl.apiCreatebus);
router.get("/api/bus/:id", busCtrl.apiGetbusById);
router.put("/api/bus/:id", busCtrl.apiUpdatebus);
router.delete("/api/bus/:id", busCtrl.apiDeletebus); 


// trip routes
router.get("/api/trip", tripCtrl.apiGetAlltrips);
router.post("/api/trip/check", tripCtrl.apiChecktrip);
router.post("/api/trip",tripCtrl.apiCreatetrip);
router.get("/api/trip/:id", tripCtrl.apiGettripById);
router.put("/api/trip/:id", tripCtrl.apiUpdatetrip);
router.delete("/api/trip/:id", tripCtrl.apiDeletetrip); 


// reservation routes
router.get("/api/reservation", reservationCtrl.apiGetAllreservations);
router.post("/api/reservation/check", reservationCtrl.apiCheckreservation);
router.post("/api/reservation",reservationCtrl.apiCreatereservation);
router.get("/api/reservation/:id", reservationCtrl.apiGetreservationById);
router.get("/api/reservation/owner/:id", reservationCtrl.apiGetreservationByIdOwner);
router.put("/api/reservation/:id", reservationCtrl.apiUpdatereservation);
router.delete("/api/reservation/:id", reservationCtrl.apiDeletereservation); 

module.exports = router;

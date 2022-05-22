const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());

const fs = require("fs");
const PDFDocument = require("./pdfkit-tables");

router.post("/generateSupplierReport", async function (req, res, next) {
    //load cuurent time
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var datestamp =
    "DATE:- " +
        year +
        "-" +
        (month + 1) +
        "-" +
        date;
    var timestamp =
    "TIME:- " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;


    const supplierReportRequest = req.body.supplier;
    console.log(supplierReportRequest)



    // Create The PDF document

    var myDoc = new PDFDocument({ bufferPages: true });

    let buffers = [];
    myDoc.on("data", buffers.push.bind(buffers));
    myDoc.on("end", () => {
        let pdfData = Buffer.concat(buffers);

        res.writeHead(200, {
            "Content-Length": Buffer.byteLength(pdfData),
            "Content-Type": "application/pdf",
            "Content-disposition": `attachment;filename=Supplierslist_${datestamp}.pdf`,
        })
            .end(pdfData);

    });


    myDoc
        .fillColor("#444444")
        .fontSize(20)
        .text("Suppliers Details Report", 110, 57)
        .fontSize(10)
        .text("Shopsy", 200, 50, { align: "right" })
        .text("Colombo", 200, 65, { align: "right" })
        .text("Sri Lanka", 200, 80, { align: "right" })
        .text(datestamp,200,95,{align: "right"})
        .text(timestamp,200,110,{align: "right"})
        .moveDown();

    const table = {
        headers: ["Company ID", "Company Name","Address", "Phone Number", "Email","Product category"],
        rows: [],
    };

    for (const supplier of supplierReportRequest) {
        table.rows.push([
            supplier.companyID,
            supplier.companyName,
            supplier.address,
            supplier.contactNo,
            supplier.email,
            supplier.productCategory
           
        ]);
    }
    

    // Draw the table
    myDoc.moveDown().table(table, 15, 150, { width: 500 });

    myDoc.end();

});

module.exports = router;
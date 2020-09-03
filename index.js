const express = require("express") //memanggil library express js
const bodyParser = require("body-parser") //memanggil library body-parser
const cors = require("cors") //memanggil library cors
const app = express();

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    //req = variabel yang berisi data request
    //res = variabel yang berisi data response dari end-point
    //membuat object yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertamaku",
        method: req.method,
        code: res.statusCode
    } 
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
    // name dan age diberi ' : ' tandanya bersifat dinamis bisa diganti nilainya
    // saat melakukan request 

    //menampung data yang dikirimkan
    let name = req.params.name //menagmbil nilai pada parameter name
    let age = req.params.age //mengambil nilai pada parameter age

    //membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama & umur sesuai dengan nilai parameter
    let response = {
        nama: name,
        umur: age
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//endpoint "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) //mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) //mengambil nilai lebar dari body

    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
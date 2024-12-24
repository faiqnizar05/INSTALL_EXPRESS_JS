// TODO 3: Import data students dari folder data/students.js
// code here

// Membuat Class StudentController
class StudentController {
    index(req, res){
        const response = {
            message : "Menampilkan data students",
            data : student
        }
        res.json(response)
    }
  
    store(req, res) {
      const { nama } = req.body;
      
         
      const data = {
        message: "Menambahkan  data  student: ${nama}",
         data: [],
      }
      res.json(data);
    }
  
    update(req, res) {
      const { id } = req.params;
      const { nama } = req.body;


      const data = {
        message: 'Mengedit student id ${id}, nama ${nama}',
         data: [],
      };
      res.json(data);

    }
  
    destroy(req, res) {
      const { id } = req.params;
      const data = {
        message: 'Menghapus student id ${id}',
         data: [],
      }
      res.json(data);
    }
  }
  
  // Membuat object StudentController
  const object = new StudentController();
  
  // Export object StudentController
  module.exports = object;
  
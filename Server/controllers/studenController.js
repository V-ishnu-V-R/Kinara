import studentModel from "../models/studentModel.js";
//Creating student with Id,name and totalMarks.
export const createStudent = async (req, res) => {
  const { id, name, totalMarks } = req.body;
  try {
    const newStudent = new studentModel({
      id,
      name,
      totalMarks,
    });
    newStudent.save();

    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal error server" });
  }
};
//Displaying students in required paginated format.
export const getStudents = async (req, res) => {
  try {
    const { page = 1, pageSize = 5 } = req.query;
    const skip = (page - 1) * pageSize;
    const students = await studentModel
      .find()
      .skip(skip)
      .limit(parseInt(pageSize));

    res.json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Inetnal server error" });
  }
};
//Displaying student in filterd criteria and paginated manner
export const filterStudent = async (req, res) => {
  try {
    const { page = 1, pageSize = 5 } = req.query;
    //Example filter criteria
    const criteria = { id: { $gt: 3 } }; //filtering based on id greater than 3
    const skip = (page - 1) * pageSize;
    const filterStudents = await studentModel
      .find(criteria)
      .skip(skip)
      .limit(parseInt(pageSize));

    res.json(filterStudents);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

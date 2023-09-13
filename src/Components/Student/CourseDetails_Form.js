import React from 'react'

function CourseDetails_Form() {
  return (
    <div>
    <h1>Course Details Form</h1>
    <form action="/submit" method="POST">
        <div>
            <label for="subject_code">Subject Code:</label>
            <input type="text" id="subject_code" name="subject_code" required />
        </div>
        <div>
            <label for="subject_name">Subject Name:</label>
            <input type="text" id="subject_name" name="subject_name" required />
        </div>
        <div>
            <label for="subject_credit">Subject Credit:</label>
            <input type="number" id="subject_credit" name="subject_credit" required />
        </div>
        <div>
            <label for="subject_alias">Subject Alias:</label>
            <input type="text" id="subject_alias" name="subject_alias" required />
        </div>
        <div>
            <label for="semester">Semester:</label>
            <input type="number" id="semester" name="semester" required />
        </div>
        <div>
            <label for="theory_min_passing_marks">Theory Min Passing Marks:</label>
            <input type="number" id="theory_min_passing_marks" name="theory_min_passing_marks" required />
        </div>
        <div>
            <label for="theory_min_passing_marks2">Theory Min Passing Marks 2:</label>
            <input type="number" id="theory_min_passing_marks2" name="theory_min_passing_marks2" required />
        </div>
        <div>
            <label for="theory_total_marks">Theory Total Marks:</label>
            <input type="number" id="theory_total_marks" name="theory_total_marks" required />
        </div>
        <div>
            <label for="sessional_min_passing_marks">Sessional Min Passing Marks:</label>
            <input type="number" id="sessional_min_passing_marks" name="sessional_min_passing_marks" required />
        </div>
        <div>
            <label for="sessional_min_passing_marks2">Sessional Min Passing Marks 2:</label>
            <input type="number" id="sessional_min_passing_marks2" name="sessional_min_passing_marks2" required />
        </div>
        <div>
            <label for="sessional_total_marks">Sessional Total Marks:</label>
            <input type="number" id="sessional_total_marks" name="sessional_total_marks" required />
        </div>
        <div>
            <label for="practical_min_passing_marks">Practical Min Passing Marks:</label>
            <input type="number" id="practical_min_passing_marks" name="practical_min_passing_marks" required />
        </div>
        <div>
            <label for="practical_min_passing_marks2">Practical Min Passing Marks 2:</label>
            <input type="number" id="practical_min_passing_marks2" name="practical_min_passing_marks2" required />
        </div>
        <div>
            <label for="practical_total_marks">Practical Total Marks:</label>
            <input type="number" id="practical_total_marks" name="practical_total_marks" required />
        </div>
        <div>
            <label for="isElective">Is Elective:</label>
            <input type="checkbox" id="isElective" name="isElective" />
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
    </form>
    </div>
  )
}

export default CourseDetails_Form;

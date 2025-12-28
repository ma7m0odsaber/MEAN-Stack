const students = [
    "Ahmed",
    "Sara",
    "Mahmoud",
    "Fatima",
    "Omar",
    "Nour",
    "Youssef",
    "Salma",
    "Kareem",
    "Heba",
];
const grades = [78, 85, 49, 66, 71, 88, 74, 95, 60, 45];

//Printing Students with their grades and whether they are passed(>=50) or failed(<50)
let studentsTable = document.getElementById("studentsTable");
for (let i = 0; i < students.length; i++) {
    studentsTable.querySelector("tbody").appendChild(createRow(i));
}

//Calculating average grades
let sum = 0,
    avg = 0,
    maxGrade = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
    maxGrade = Math.max(maxGrade, grades[i]);
}

avg = sum / grades.length;
document.getElementById("averageNum").textContent = avg;

//Showing the highest grade in the class
document.getElementById("highestNum").textContent = maxGrade;

//Searching for a student
//if found -> print grade and condition(pass or fail)
//else print 'Student not found'
function Search() {
    document.getElementById("searchResult").style.display = "block";

    let element = document.getElementById("found");
    let searchInput = document.getElementById("searchInput").value;
    let flag = 0;
    for (let i = 0; i < students.length; i++) {
        if (searchInput == students[i].toLowerCase()) {
            flag = 1;
            document.getElementById("notFound").style.display = "none";
            element.style.display = "block";
            element.innerHTML = `
                <table class="w-full">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-700">
                              Name
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-700">
                              Grade
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-700">
                              Status
                            </th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>`;
            element.querySelector("tbody").appendChild(createRow(i));
        }
    }
    if (flag === 0) {
        element.style.display = "none";
        document.getElementById("notFound").style.display = "block";
    }
}

function createRow(i) {
    let t = document.createElement("tr");
    t.className = "hover:bg-gray-50";

    let tName = document.createElement("td");
    let tGrade = document.createElement("td");
    let tStatus = document.createElement("td");

    tName.className = "px-6 py-4 text-sm text-gray-900";
    tGrade.className = "px-6 py-4 text-sm text-gray-700";
    tStatus.className = `px-6 py-4 text-sm font-medium ${grades[i] >= 50 ? "text-green-600" : "text-red-600"}`;

    tName.textContent = students[i];
    tGrade.textContent = grades[i];
    tStatus.textContent = grades[i] >= 50 ? "Pass" : "Fail";

    t.appendChild(tName);
    t.appendChild(tGrade);
    t.appendChild(tStatus);

    return t;
}

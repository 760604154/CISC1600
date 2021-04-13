"use strict"
function createChart1() {
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["STUYVESANT HIGH SCHOOL", "BRONX HIGH SCHOOL OF SCIENCE", "STATEN ISLAND TECHNICAL HIGH SCHOOL", "BROOKLYN TECHNICAL HIGH SCHOOL", "QUEENS HS FOR SCIENCE YORK COL", "Townsend Harris High School at Queens College", "HS of American Studies at Lehman College", "High School For Math Science Engineering City Coll", "Dual Language and Asian Studies High School", "BARD HIGH SCHOOL EARLY COLLEGE"],
      datasets: [
        {
          label: "SAT Mathematics Mean Score",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#000080", "#FF00FF", "#800080", "#FA8072", "#CCCCFF"],
          data: [735,685,673,652,650,644,630,627,612,608]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Top 10 SAT Mathematics Mean Score In 2010'
      }
    }
});
}

function createChart2(){
    new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["STUYVESANT HIGH SCHOOL", "BRONX HIGH SCHOOL OF SCIENCE", "STATEN ISLAND TECHNICAL HIGH SCHOOL", "BROOKLYN TECHNICAL HIGH SCHOOL", "QUEENS HS FOR SCIENCE YORK COL", "Townsend Harris High School at Queens College", "HS of American Studies at Lehman College", "High School For Math Science Engineering City Coll", "Dual Language and Asian Studies High School", "BARD HIGH SCHOOL EARLY COLLEGE"],
      datasets: [
        {
          label: "SAT Mathematics Mean Score",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#000080", "#FF00FF", "#800080", "#FA8072", "#CCCCFF"],
          data: [735,685,673,652,650,644,630,627,612,608]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Top 10 SAT Mathematics Mean Score In 2010'
      }
    }
});
}



document.addEventListener('DOMContentLoaded',createChart1);
document.addEventListener('DOMContentLoaded',createChart2);
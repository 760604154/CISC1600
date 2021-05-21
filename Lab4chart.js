"use strict"
function createChart1() {
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["STUYVESANT HIGH SCHOOL", "STATEN ISLAND TECHNICAL HIGH SCHOOL", "Townsend Harris High School at QUEENS COLLEGE", "HS of American Studies at Lehman College", "BRONX HIGH SCHOOL OF SCIENCE", "BARD HIGH SCHOOL EARLY COLLEGE", "QUEENS HS FOR SCIENCE YORK COL", "High School For Math Science Engineering City Coll", "BROOKLYN TECHNICAL HIGH SCHOOL", "BEACON SCHOOL"],
      datasets: [
        {
          label: "SAT reading Mean Score",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#000080", "#FF00FF", "#800080", "#FA8072", "#CCCCFF"],
          data: [674,638,637,635,632,630,613,592,588,573]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Top 10 SAT reading Mean Score In 2010'
      }
    }
});
}

function createChart2(){
    new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["STUYVESANT HIGH SCHOOL", "STATEN ISLAND TECHNICAL HIGH SCHOOL", "Townsend Harris High School at QUEENS COLLEGE", "HS of American Studies at Lehman College", "BRONX HIGH SCHOOL OF SCIENCE", "BARD HIGH SCHOOL EARLY COLLEGE", "QUEENS HS FOR SCIENCE YORK COL", "High School For Math Science Engineering City Coll", "BROOKLYN TECHNICAL HIGH SCHOOL", "BEACON SCHOOL"],
      datasets: [
        {
          label: "SAT Mathematics Mean Score",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#000080", "#FF00FF", "#800080", "#FA8072", "#CCCCFF"],
          data: [674,638,637,635,632,630,613,592,588,573]
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

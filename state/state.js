
  const ctx = document.getElementById('myChart');

  fetch('data.json')

 
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'HTML/CSS', 'C', 'C++'],
          datasets: [{
            label: 'Pourcentage d\'utilisation',
            data: [97, 36, 33, 27, 25, 100, 20, 15],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          maintainAspectRatio: false
        }
      });

      const ctxLine = document.getElementById('sidou').getContext('2d');
      new Chart(ctxLine, {
          type: 'line',
          data: {
            labels: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'HTML/CSS', 'C', 'C++'],
              datasets: [{
                label: 'Pourcentage d\'utilisation',
                  data: [97, 36, 33, 27, 25, 100, 20, 15],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              },
              maintainAspectRatio: false
          }
      });

        // Pie chart
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'HTML/CSS', 'C', 'C++'],
            datasets: [{
                label: 'Répartition',
                data: [97, 36, 33, 27, 25, 100, 20, 15],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#C9CBCF']
            }]
        },
        options: {
            maintainAspectRatio: false
        }
    });

    // Doughnut chart
    const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'HTML/CSS', 'C', 'C++'],
            datasets: [{
                label: 'Répartition',
                data: [97, 36, 33, 27, 25, 100, 20, 15],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#C9CBCF']
            }]
        },
        options: {
            maintainAspectRatio: false
        }
    });
 
//   const ctx = document.getElementById('myChart');

//   fetch('data.json')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: data.labels,
//         datasets: [{
//           label: '# of Votes',
//           data: data.values,
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         },
//         maintainAspectRatio: false
//       }
//     });
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });
    

 
 

 
 

 
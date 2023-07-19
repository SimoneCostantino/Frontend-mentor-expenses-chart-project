fetch('./data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var days = [];
    var amount = [];

    data.forEach(function(item) {
      days.push(item.day);
      amount.push(item.amount);
    });

    let totalBalance = 0

    amount.forEach(function(element, index){
      totalBalance+=element;

  });

function calculation(totalBalance) {
  document.querySelector('.total-this-month-number')
    .innerHTML = totalBalance
  }

calculation(`$${totalBalance}`)

//tooltip
const titleTooltip = (tooltipItems) => {
  const index = tooltipItems[0].dataIndex; // Get the index of the tooltip item
  return `$${amount[index]}`; // Return the corresponding amount for that index
}

const labelTooltip = (tooltipItems) => {
  return '';
}

//config
const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [{
          label: 'Amount',
          data: amount,
          backgroundColor: 'rgb(236, 117, 93)',
          borderWidth: 1,
          borderRadius: 5,
          hoverBackgroundColor: 'rgb(180, 223, 229)',
        }]
      },
      options: {
        responsive: true, // Enable responsiveness to adjust the chart dimensions
        maintainAspectRatio: false, // Allow the chart to fill its container without maintaining aspect ratio
        onHover: (event, chartElement) => {
          event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        },
        plugins: {
          tooltip: {
            yAlign: 'bottom',
            caretSize: 0,
            titleMarginBottom: 0,
            displayColors: false,
            callbacks: {
              title: titleTooltip,
              label: labelTooltip,
            }
          },
          legend: { 
            display: false, 
          }, 
        },
        scales: {
          x: {
            grid: {
              display: false // Remove the grid lines for the y-axis
            }
          },
          y: {
              display: false // Remove the grid lines for the y-axis
            },
        }
      }
    })
  });
  
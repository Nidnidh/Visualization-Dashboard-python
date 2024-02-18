
document.addEventListener('DOMContentLoaded', function () {
    
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
          
            createVisualization(data);
        })
        .catch(error => console.error('Error fetching data:', error));

  
    function createVisualization(data) {
       
    }


    d3.select('#yearFilter').on('change', function () {
        const selectedYear = d3.select(this).property('value');
       
    });

});

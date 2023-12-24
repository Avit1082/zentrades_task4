let barChartData = {
    
    labels: ['Everett', 'seattle', 'Lynnwood', 'Bothell','Mukitteo','Edmonds'],
    datasets: [{
        label:"Revenue for November 2019",
        backgroundColor: 'rgba(71,191,155,255)',
        borderColor: 'rgba(71,191,155,255)',
        borderWidth: 1,
        data: [80000, 75000, 49000, 47500,42000,34000],
    }]
};

let ctx = document.getElementById('barChart1').getContext('2d');

let myChart = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options:{
        indexAxis:'y',
    }
});

let barChartData2 = {
    labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing','HWT Replacemenr','Mainenance','Material Sale'],
    datasets: [{
        label:"Revenue for November 2019",
        backgroundColor: 'rgba(71,191,155,255)',
        borderColor: 'rgba(71,191,155,255) ',
        borderWidth: 1,
        data: [180000, 130000, 80000, 77000,44000,42000,5000],
    }]
};

let ctx2 = document.getElementById('barChart2').getContext('2d');

let myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: barChartData2,
    options:{
        indexAxis:'y',
    }
});
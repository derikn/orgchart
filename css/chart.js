google.load("visualization", "1", {packages:["orgchart"]});
  google.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Manager');
    data.addColumn('string', 'ToolTip');

    data.addRows([
      [{v:'Membership', f:'<h2>Membership</h2><div style="font-style:italic">Board of Directors</div>'}, '', 'The President'],
      [{v:'Support Services', f:'<h3>Support Services</h3><div style="font-style:italic">Tanya Sather<div>'}, 'Membership', ''],
      [{v:'Direct Services', f:'<h3>Direct Services</h3><div style="font-style:italic">Richard Faucher<div>'}, 'Membership', ''],

    ]);

    var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));

    chart.draw(data, {
      allowHtml:true,
      allowCollapse:true,
      nodeClass:'customnode',
      selectedNodeClass:'selectedcustom',});
  }

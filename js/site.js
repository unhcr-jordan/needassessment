function sheetLoaded(sheetData){

    console.log(sheetData);
    initDashboard(sheetData.feed.entry);
}

function initDashboard(data){
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',"No Date"];
    var weeks = ['1 Jan', '7 Jan', '13 Jan', '19 Jan', '25 Jan', '31 Jan', '6 Feb', '12 Feb', '18 Feb', '24 Feb', '2 Mar', '8 Mar', '14 Mar', '20 Mar', '26 Mar', '1 Apr', '7 Apr', '13 Apr', '19 Apr', '25 Apr', '1 May', '7 May', '13 May', '19 May', '25 May', '31 May', '6 Jun', '12 Jun', '18 Jun', '24 Jun', '30 Jun', '6 Jul', '12 Jul', '18 Jul', '24 Jul', '30 Jul', '5 Aug', '11 Aug', '17 Aug', '23 Aug', '29 Aug', '4 Sep', '10 Sep', '16 Sep', '22 Sep', '28 Sep', '4 Oct', '10 Oct', '16 Oct', '22 Oct', '28 Oct', '3 Nov', '9 Nov', '15 Nov', '21 Nov', '27 Nov', '3 Dec', '9 Dec', '15 Dec', '21 Dec', '27 Dec', '2 Jan', '8 Jan', '14 Jan', '20 Jan', '26 Jan', '1 Feb', '7 Feb', '13 Feb', '19 Feb', '25 Feb', '2 Mar', '8 Mar', '14 Mar', '20 Mar', '26 Mar', '1 Apr', '7 Apr', '13 Apr', '19 Apr', '25 Apr', '1 May', '7 May', '13 May', '19 May', '25 May', '31 May', '6 Jun', '12 Jun', '18 Jun', '24 Jun', '30 Jun', '6 Jul', '12 Jul', '18 Jul', '24 Jul', '30 Jul', '5 Aug', '11 Aug', '17 Aug', '23 Aug', '29 Aug', '4 Sep', '10 Sep', '16 Sep', '22 Sep', '28 Sep', '4 Oct', '10 Oct', '16 Oct', '22 Oct', '28 Oct', '3 Nov', '9 Nov', '15 Nov', '21 Nov', '27 Nov', '3 Dec', '9 Dec', '15 Dec', '21 Dec', '27 Dec', '2 Jan', '8 Jan', '14 Jan', '20 Jan', '26 Jan', '1 Feb', '7 Feb', '13 Feb', '19 Feb', '25 Feb', '3 Mar', '9 Mar', '15 Mar', '21 Mar', '27 Mar', '2 Apr', '8 Apr', '14 Apr', '20 Apr', '26 Apr', '2 May', '8 May', '14 May', '20 May', '26 May', '1 Jun', '7 Jun', '13 Jun', '19 Jun', '25 Jun', '1 Jul', '7 Jul', '13 Jul', '19 Jul', '25 Jul', '31 Jul', '6 Aug', '12 Aug', '18 Aug', '24 Aug', '30 Aug', '5 Sep', '11 Sep', '17 Sep', '23 Sep', '29 Sep', '5 Oct', '11 Oct', '17 Oct', '23 Oct', '29 Oct', '4 Nov', '10 Nov', '16 Nov', '22 Nov', '28 Nov', '4 Dec', '10 Dec', '16 Dec', '22 Dec', '28 Dec', '3 Jan', '9 Jan', '15 Jan', '21 Jan', '27 Jan', '2 Feb', '8 Feb', '14 Feb', '20 Feb', '26 Feb', '4 Mar', '10 Mar', '16 Mar', '22 Mar', '28 Mar', '3 Apr', '9 Apr', '15 Apr', '21 Apr', '27 Apr', '3 May', '9 May', '15 May', '21 May', '27 May', '2 Jun', '8 Jun', '14 Jun', '20 Jun', '26 Jun', '2 Jul', '8 Jul', '14 Jul', '20 Jul', '26 Jul', '1 Aug', '7 Aug', '13 Aug', '19 Aug', '25 Aug', '31 Aug', '6 Sep', '12 Sep', '18 Sep', '24 Sep', '30 Sep', '6 Oct', '12 Oct', '18 Oct', '24 Oct', '30 Oct', '5 Nov', '11 Nov', '17 Nov', '23 Nov', '29 Nov', '5 Dec', '11 Dec', '17 Dec', '23 Dec', '29 Dec', '4 Jan', '10 Jan', '16 Jan', '22 Jan', '28 Jan', '3 Feb', '9 Feb', '15 Feb', '21 Feb', '27 Feb', '5 Mar', '11 Mar', '17 Mar', '23 Mar', '29 Mar', '4 Apr', '10 Apr', '16 Apr', '22 Apr', '28 Apr', '4 May', '10 May', '16 May', '22 May', '28 May', '3 Jun', '9 Jun', '15 Jun', '21 Jun', '27 Jun', '3 Jul', '9 Jul', '15 Jul', '21 Jul', '27 Jul', '2 Aug', '8 Aug', '14 Aug', '20 Aug', '26 Aug', '1 Sep', '7 Sep', '13 Sep', '19 Sep', '25 Sep', '1 Oct', '7 Oct', '13 Oct', '19 Oct', '25 Oct', '31 Oct', '6 Nov', '12 Nov', '18 Nov', '24 Nov', '30 Nov', '6 Dec', '12 Dec', '18 Dec', '24 Dec', '30 Dec', '5 Jan', '11 Jan', '17 Jan', '23 Jan', '29 Jan', '4 Feb', '10 Feb', '16 Feb', '22 Feb', '28 Feb', '5 Mar', '11 Mar', '17 Mar', '23 Mar', '29 Mar', '4 Apr', '10 Apr', '16 Apr', '22 Apr', '28 Apr', '4 May', '10 May', '16 May', '22 May', '28 May', '3 Jun', '9 Jun', '15 Jun', '21 Jun', '27 Jun', '3 Jul', '9 Jul', '15 Jul', '21 Jul', '27 Jul', '2 Aug', '8 Aug', '14 Aug', '20 Aug', '26 Aug', '1 Sep', '7 Sep', '13 Sep', '19 Sep', '25 Sep', '1 Oct', '7 Oct', '13 Oct', '19 Oct', '25 Oct', '31 Oct', '6 Nov', '12 Nov', '18 Nov', '24 Nov', '30 Nov', '6 Dec', '12 Dec', '18 Dec', '24 Dec', '30 Dec', '5 Jan', '11 Jan', '17 Jan', '23 Jan', '29 Jan', '4 Feb', '10 Feb', '16 Feb', '22 Feb', '28 Feb', '6 Mar', '12 Mar', '18 Mar', '24 Mar', '30 Mar', '5 Apr', '11 Apr', '17 Apr', '23 Apr', '29 Apr', '5 May', '11 May', '17 May', '23 May', '29 May', '4 Jun', '10 Jun', '16 Jun', '22 Jun', '28 Jun', '4 Jul', '10 Jul', '16 Jul', '22 Jul', '28 Jul', '3 Aug', '9 Aug', '15 Aug', '21 Aug', '27 Aug', '2 Sep', '8 Sep', '14 Sep', '20 Sep', '26 Sep', '2 Oct', '8 Oct', '14 Oct', '20 Oct', '26 Oct', '1 Nov', '7 Nov', '13 Nov', '19 Nov', '25 Nov', '1 Dec', '7 Dec', '13 Dec', '19 Dec', '25 Dec', '31 Dec'];
	var numberFormat = d3.format(",f");			
    var hxlSet = hxlate(data);
    var sectorList=getSectors(hxlSet);
    var data = hxlToCF(hxlSet,sectorList,months,weeks);
    var cf = crossfilter(data);

    var color = '#056CB6';

    function reduceAdd(p, v) {
        v.sector.forEach (function(val, idx) {
            p[val] = (p[val] || 0) + 1; //increment counts
        });
        return p;
    }
    
    function reduceRemove(p, v) {
         v.sector.forEach (function(val, idx) {
            p[val] = (p[val] || 0) - 1; //decrement counts
        });
        return p;
    }
    
    function reduceInitial() {
           return {};  
    }

    var sectorChart = dc.rowChart('#sectorChart');
	var statusChart = dc.rowChart('#statusChart');
	var approvalChart = dc.rowChart('#approvalChart');	
    var month_chart = dc.lineChart("#month");
    var monthrange_chart = dc.barChart("#monthrange");


    var surveys = dc.numberDisplay('#selected');

    var monthDimension = cf.dimension(function(d){return d['date+published'];});
    var monthGroup = monthDimension.group();

    var sectorDimension = cf.dimension(function(d){ return d.sector;});
    var sectorGroup = sectorDimension.groupAll().reduce(reduceAdd, reduceRemove, reduceInitial).value();

	var statusDimension =  cf.dimension(function(d) { return d['status']});
	var statusGroup = statusDimension.group();

	var approvalDimension =  cf.dimension(function(d) { return d['apprv']});
	var approvalGroup = approvalDimension.group();
	
	
    var surveyDimension = cf.dimension(function(d){ return d['meta+id']});
    var surveyGroup = surveyDimension.group();

    var all = cf.groupAll();

    surveys
        .valueAccessor(function(x){ return x;})
        .group(unique_count(surveyGroup))
        .formatNumber(function(x){ return Math.round(x);});
        
    sectorGroup.all = function() {
            var newObject = [];
            for (var key in this) {
              if (this.hasOwnProperty(key) && key !== "all") {
                newObject.push({
                  key: key,
                  value: this[key]
                });
              }
            }
            return newObject;
    };

	var tip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function (d) { return "<span style='color: #f0027f'>" +  d.key + "</span> : "  + numberFormat(d.value) + " Assessments"; });
				
    statusChart.width($('#statusChart').width())
        .height(210)
        .dimension(statusDimension) 
        .group(statusGroup)
        .margins({top: 10, right: 50, bottom: 40, left: 30})
            .colors(['#5bc0de'])
            .colorDomain([0, 0])
            .colorAccessor(function (d) {
                return 1;
            }) 
        .labelOffsetY(20)
        .elasticX(true)
        .xAxis().ticks(0);

    approvalChart.width($('#approvalChart').width())
        .height(210)
        .dimension(approvalDimension) 
        .group(approvalGroup)
        .margins({top: 0, right: 50, bottom: 40, left: 30})
            .colors(['#5bc0de'])
            .colorDomain([0, 1])
            .colorAccessor(function (d) {
                return 1;
            }) 
        .labelOffsetY(25)
        .elasticX(true)
        .xAxis().ticks(0);		
				
    sectorChart.width($('#sectorChart').width())
        .height(210)
        .dimension(sectorDimension) 
        .group(sectorGroup)
        .margins({top: 0, right: 50, bottom: 40, left: 30})
            .colors(['#5bc0de'])
            .colorDomain([0, 1])
            .colorAccessor(function (d) {
                return 1;
            }) 
        .labelOffsetY(14)
        .elasticX(true)
        .xAxis().ticks(0);

    sectorChart.filterHandler (function (dimension, filters) {
        dimension.filter(null);   
        if (filters.length === 0){
            dimension.filter(null);
        } else {
            dimension.filterFunction(function (d) {
                for (var i=0; i < d.length; i++) {
                    if (filters.indexOf(d[i]) >= 0) return true;
                }
                return false; 
            });
        return filters; 
        }
    });

	

				var monthDimension = cf.dimension(function(d){return d['date+week'];});	
				var monthGroup = monthDimension.group();
                var monthByTotal = monthDimension.group().reduceSum(function (d) { return d.cnt;} );
                var food=monthDimension.group().reduceSum(function(d) {if (d.sector=="Food+Livelihoods") {return d.cnt;}else{return 0;}});
                var basic=monthDimension.group().reduceSum(function(d) {if (d.sector=="BasicNeeds") {return d.cnt;}else{return 0;}});
                var education=monthDimension.group().reduceSum(function(d) {if (d.sector=="Education") {return d.cnt;}else{return 0;}});
                var health=monthDimension.group().reduceSum(function(d) {if (d.sector=="Health") {return d.cnt;}else{return 0;}});
                var protection=monthDimension.group().reduceSum(function(d) {if (d.sector=="Protection") {return d.cnt;}else{return 0;}});
                var shelter=monthDimension.group().reduceSum(function(d) {if (d.sector=="Shelter") {return d.cnt;}else{return 0;}});
                var wash=monthDimension.group().reduceSum(function(d) {if (d.sector=="WASH") {return d.cnt;}else{return 0;}});				


                   month_chart.width(1150).height(180)
                       .transitionDuration(1000)
                       .margins({top: 30, right: 50, bottom: 25, left: 60})
                       .dimension(monthDimension)
                       .mouseZoomable(true)
                       .rangeChart(monthrange_chart)
                       .x(d3.time.scale().domain([new Date(2014, 3, 1), new Date(2015, 11, 31)]))
                       .xUnits(d3.time.months)
        //.elasticY(true)
                       .renderHorizontalGridLines(true)
                       .legend(dc.legend().x(950).y(10).itemHeight(13).gap(5))
                       .brushOn(false)
                        .group(food, 'Food/Livelihoods')
                        .stack(basic, 'Basic Needs')
                        .stack(education, 'Education')
                        .stack(health, 'Health')
                        .stack(protection, 'Protection')
                        .stack(shelter, 'Shelter')
                        .stack(wash, 'WASH')
                       .renderArea(false);


                   monthrange_chart.width(1150)
                       .height(40)
                       .margins({top: 0, right: 50, bottom: 20, left: 60})
                       .dimension(monthDimension)
                       .group(monthByTotal)
                       .colors(['#5bc0de'])
                       .gap(1)
                       .x(d3.time.scale().domain([new Date(2014, 3, 1), new Date(2015, 11, 31)]))
                       .xUnits(d3.time.months)
                       .yAxis().ticks(0);	
	

    dc.dataTable("#data-table")
                .dimension(monthDimension)                
                .group(function (d) {
                    return d['status'];
                })
                .size(650)
                .columns([
                    function(d){
                       return d['meta+assessmenttitle']; 
                    },
                    function(d){
                       return d['org']; 
                    },
                    function(d){
                       return d['date+published']; 
                    },
                    function(d){
                        if(d['sector'].length>4){
                            return 'Multisectoral'
                        }
                       return d['sector']; 
                    }
                ])

    dc.dataCount('#count-info')
            .dimension(cf)
            .group(all);

    dc.renderAll();
	
               d3.selectAll("g.row").call(tip);
               d3.selectAll("g.row").on('mouseover', tip.show).on('mouseout', tip.hide);

	
    
    function unique_count(group) {
        return {
            value: function() {
                console.log(group.all().filter(function(kv) {
                   return kv.value > 0}).length);
                return group.all().filter(function(kv) {
                   return kv.value > 0;
                }).length;
            }
        };
    }

}

function getSectors(hxlSet){

    var sectorList=[];
    hxlSet.columns.forEach(function(c){
        if(c.tag==='#sector'){
            sectorList.push(c.displayTag);
        }
    });
    return sectorList;
}

function hxlate(data){

    var hxlSet = [];
    data.forEach(function(r){
        var row = [];
        for (var key in r) {
            if(key.substring(0,4)==='gsx$'){
                row.push(r[key]['$t']);
            }
        }
        hxlSet.push(row);        
    })

    return hxl.wrap(hxlSet);
}

function hxlToCF(hxlSet,sectorList,months,weeks){

    var columns = ['#status','#meta+assessmenttitle','#org','#date+published','#meta+id','#apprv','#cnt'];
    var cfData = [];

    hxlSet.forEach(function(r){
        var row = {'sector':[]};

        columns.forEach(function(c){
            row[c.substring(1)] = r.get(c);
        });

        sectorList.forEach(function(c){
            if(r.get(c)=='1'){
                var sector = c.substring(8)
                row.sector.push(sector);
            }
        });
        cfData.push(row);
    });

    cfData.forEach(function(d){
        var dateFormat = d3.time.format("%d/%m/%Y");	
        d['date+week'] = dateFormat.parse(d['date+published']);

    });
    
    return cfData;

}
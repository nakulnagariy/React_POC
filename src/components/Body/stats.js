import React, {Component} from 'react'
import { fetchFactory } from '../Fetch/fetchFactory'
    
    var batters = [];
    var rowdata = "";

    
export class Body extends React.Component {
    constructor(props) {
        super(props);
        this.battersDataFetchReq = this.battersDataFetchReq.bind(this);
        this.showBattersData = this.showBattersData.bind(this);
        this.battersDataFetchReq();

        this.state = {
            rowdata : "",
            batters : []
        }
    }    

    //ajax request
    battersDataFetchReq() {
        fetchFactory('./assets/some.json', 'GET')
        .then((data) => {
            this.showBattersData(data)
        })
        .then((data) => {
            this.setState( {
                rowdata: data
            });
        })

        // .then(function(data) {
        //     //this.showBattersData = this.showBattersData.bind(this);
        //     //this.setState({ rowdata: data });
        //     this.setState({ rowdata: data });
        // })
    }

    showBattersData(res) {
        rowdata = `
            <table id="batters" name="batters" class="table table-bordered table-hover">
            <caption>List of batters</caption>
            <th>#</th>
            <th>Id</th>
            <th>Type</th>
            <tbody id="batters_body">`;    
        batters = res.batters.batter;
        for(var i = 0; i < batters.length; i++) {
            rowdata += `
                <tr>
                    <td>${[i + 1]}</td>
                    <td>${batters[i].id}</td>
                    <td>${batters[i].type}</td>
                </tr>`;
        }
        rowdata += `</tbody></table>`;
        //console.log("inside showBattersData:: ", res + ": rowdata:" + rowdata);
        //document.getElementById('tableData').innerHTML = rowdata;

        this.setState({
            rowdata: res
        });
    }
    
    render() {
        const { rowdata } = this.state;
        return (
            <div>
                {rowdata}
            </div>
           )
        }
}

import React,{Component} from 'react';

class Search extends Component {
    changeOpcaity(){
        const img = document.querySelector('.searchicon');
        img.style.opacity = 0;
    }
    render(){
        return(
    <div>
    <input type="text" className="searchInput" placeholder="Search" onChange={this.changeOpcaity}></input>
    <img src="./static/images/searchIcon.png" className="searchicon" />
    </div>
        )
    }
}

    export default Search;

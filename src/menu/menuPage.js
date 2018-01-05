import React, { Component } from 'react'
import '../style/menuPage.css'
import FaStar from 'react-icons/lib/fa/star'
import MdMore from 'react-icons/lib/md/more'
import lib from '../util/lib'
import ajx from '../util/ajax'
import propTypes from 'prop-types'

const menuPage = (props) =>{
	
	const mystyle={
		backgroundImage:`url(${ajx.menupageBackground})`,
		
	}
	return(
		
	<div id="chefinformation">
		<div 	className="menuCont" 
				style={mystyle} >
			<img 	src={props.chef.yourChef.profile_photo} 
					style={{border:'3px solid #f69323'}} 
					alt="chef"/>
			<h3 	className="text-center">
				{props.chef.yourChef.first_name+" "+props.chef.yourChef.last_name}
			</h3>
			<h5 	className="text-center">
				{props.chef.yourChef.role}
			</h5>
			<div className="row">
				<div className="col-xs-4 menu-left">
					<h4>
						{(props.chef.yourChef.rating_overall===5)?
							(	<span>
									<FaStar/>
									<FaStar/>
									<FaStar/>
									<FaStar/>
									<FaStar/>
								</span>):
						(props.chef.yourChef.rating_overall===4)?
						 (	<span>
								<FaStar/>
								<FaStar/>
								<FaStar/>
								<FaStar/>
								<FaStar style={{color:'white'}}/>
							</span>):
						(props.chef.yourChef.rating_overall===3)?
							(	<span>
								   <FaStar/>
								   <FaStar/>
								   <FaStar/>
								   <FaStar style={{color:'white'}}/>
								   <FaStar style={{color:'white'}}/>
							   </span>):
						(props.chef.yourChef.rating_overall===2)?
							   (	<span>
									  <FaStar/>
									  <FaStar/>
									  <FaStar style={{color:'white'}}/>									  
									  <FaStar style={{color:'white'}}/>									  
									  <FaStar style={{color:'white'}}/>
								  </span>):
						(props.chef.yourChef.rating_overall===1)?
								  (	<span>
										 <FaStar/>
										 <FaStar style={{color:'white'}}/>
										 <FaStar style={{color:'white'}}/>									  
										 <FaStar style={{color:'white'}}/>									  
										 <FaStar style={{color:'white'}}/>
									 </span>):
						(props.chef.yourChef.rating_overall===0)?
									 (	<span>
											<FaStar style={{color:'white'}}/>
											<FaStar style={{color:'white'}}/>
											<FaStar style={{color:'white'}}/>									  
											<FaStar style={{color:'white'}}/>									  
											<FaStar style={{color:'white'}}/>
										</span>):null
								  
							   
							}
					</h4>
					<h6>RATINGS</h6>
				</div>
				<div className="col-xs-4 menu-middle">
					<h4>{props.chef.yourChef.menu.filter(food=>food.visibility).length}</h4>
					<h6>MENU</h6>
				</div>
				<div className="col-xs-4 menu-right">
					<h4>{props.chef.menuCategoriesKeys.length}</h4>
					<h6>VARIETIES</h6>
				</div>
			</div>
			<h1 className="chef-buttons text-center">
				<FaStar className="buttn" id="rate"/>
				<MdMore className="buttn" id="more"/>
			</h1>
		</div>

		<ul className="menuHolder menuTop">
					{ 
						(props.chef.fetched)? 
							props.chef.menuCategoriesKeys.map(
								(categ,key)=> (key<9)? 
									<li key={key}>
										<a 		href={'#'+categ} 
												className={"m-categories "+categ} 
												data-categ={categ} 
												onClick={lib.changecol}>
										{categ}
										</a>
									</li>:
									null ):
									null
					}
					<li id="more" className="r">
						<a id="il" onClick={lib.show}>More...</a>
						{
						(props.chef.fetched)? 
							<div id='mt' className="moreitems kp d">
								{
									props.chef.menuCategoriesKeys.map(
									(categ,key)=> (key>=9)?
											<a 		key={key}
													href={'#'+categ} 
													className={"m-categories "+categ} 
													data-categ={categ} 
													onClick={lib.changecol}>
											{categ}
											</a>:
										null )
								}
							</div>:
						null
						}
					</li>
				</ul>
	</div>
)};

export default menuPage;

menuPage.propTypes={
	chef:propTypes.object.isRequired,
}
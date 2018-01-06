const initialstate={
	fetching:false,
	fetched:false,
	fetched_chefsInYourArea:false,
	chefsInYourArea:{},
	yourChef:{},
	menuCategoriesKeys:[],
	menuCategories:[],
	error:null
};

const getChefs=(state=initialstate,action)=>{
	switch(action.type){
		case'GET_CHEFS_PENDING':{
			return{
				...state,
				fetching:true}
		}
		case'GET_CHEFS_REJECTED':{
			return{
				...state,
				fetching:false,
				fetched:false,
				fetched_chefsInYourArea:false,
				error:action.payload,
				chefsInYourArea:{},
				yourChef:{},
				menuCategoriesKeys:[],
				menuCategories:[],
				}
		}
		case'GET_CHEFS_FULFILLED':{
			return{
				...state,
				fetched_chefsInYourArea:true,
				chefsInYourArea:action.payload.data,
				error:null
			}
		}
		case 'GET_CHEFS_UPDATE':{
			return{
				...state,
				fetching:false,
				fetched:true,
				yourChef:action.payload.yourChef,
				menuCategoriesKeys:action.payload.categ,
				menuCategories:action.payload.menu,
				error:null
			}
		}
		case 'GET_CHEFS_UPDATE_FAILED':{
			return{
				...state,
				fetching:false,
				fetched:false,
				error:action.payload
			}
		}
		default:{
			return{...state}
		}
	}
};

export default getChefs;
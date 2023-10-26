import React, { lazy } from 'react';
import {pagesMenu }from "../menu"


const AUTH = {
	PAGE_404: lazy(() => import('../pages/presentation/auth/Page404')),
    LOGIN: lazy(()=>import('../pages/presentation/auth/Login'))
};

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/presentation/dashboard/DashboardPage')),
};



export const presentation = [
	/**
	 * Auth Page
	 */
	{
		path: pagesMenu.page404.path,
		element: <AUTH.PAGE_404 />,
	},
	{
		path: pagesMenu.login.path,
		element: <LANDING.DASHBOARD />,
	}

]

const contents = [...presentation, 
    // ...documentation
]
    
    ;

export default contents;
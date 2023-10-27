import React from 'react'
import PageWrapper from '../../../layout/pageWrapper/PageWrapper'
import Page from '../../../layout/page/Page'
import SubHeader, { SubHeaderLeft, SubHeaderRight, SubheaderSeparator } from '../../../layout/SubHeader/SubHeader'
import { ButtonGroup } from 'react-bootstrap'
import { Button } from '@mui/material'
import { pagesMenu } from '../../../menu'

const DashboardPage = () => {
  return (
    <PageWrapper title={pagesMenu.dashboard.text}>
		<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Overview</span>
					<SubheaderSeparator />
					<ButtonGroup>
						{/* {Object.keys(TABS).map((key) => (
							<Button
								key={key}
								color={activeTab === TABS[key] ? 'success' : themeStatus}
								onClick={() => setActiveTab(TABS[key])}>
								{TABS[key]}
							</Button>
						))} */}
					</ButtonGroup>
				</SubHeaderLeft>
				<SubHeaderRight>
					{/* <CommonAvatarTeam>
						<strong>Marketing</strong> Team
					</CommonAvatarTeam> */}
				</SubHeaderRight>
			</SubHeader>
<Page  container='fluid'>
<div className='row'>

<div className='col-12'>
						<div className='display-4 fw-bold py-3'>Insidents</div>
					</div>
</div>
</Page>

    </PageWrapper>
  )
}

export default DashboardPage
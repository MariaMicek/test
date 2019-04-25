import React from 'react'
import User from './User'
import List from '@material-ui/core/List'

class App extends React.Component {
	state = {
		users: null
	}

	componentDidMount = () => {
		fetch('https://randomuser.me/api?results=10')
			.then(response => response.json())
			.then(data => {
				this.setState({ users: data.results })
			})
	}

	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<h1
					style={{
						padding: '15px',
						borderBottom: '1px solid #7a7a7a',
						color: '#7a7a7a'
					}}
				>
					RANDOM USERS
				</h1>
				<List>
					{
						this.state.users && this.state.users.map(
							user => (
								<User
									key={user.login.uuid}
									user={user}
								/>
							)
						)
					}
				</List>
			</div>
		)
	}
}

export default App

import { Link, NavLink } from 'react-router-dom';

function Header(props) {
	const style = { color: 'hotpink' };
	return (
		<header className={props.type}>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>

			<ul id='gnb'>
				<li>
					<NavLink to='/department' activeStyle={style}>
						Department
					</NavLink>
				</li>
				<li>
					<NavLink to='/community' activeStyle={style}>
						Community
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeStyle={style}>
						Youtube
					</NavLink>
				</li>
				<li>
					<NavLink to='/location' activeStyle={style}>
						Location
					</NavLink>
				</li>
				<li>
					<NavLink to='/members' activeStyle={style}>
						Members
					</NavLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;

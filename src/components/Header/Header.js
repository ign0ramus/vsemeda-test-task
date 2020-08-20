import React, { useState, useEffect } from 'react';

import { ReactComponent as AddressIcon } from '../../assets/images/address-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import HeaderInput from './HeaderInput/HeaderInput';
import Controls from '../Controls/Controls';

import classes from './Header.module.scss';

const mockAddresses = [
	{
		searchName: 'Петровско-Разумовская',
		fullName: 'ул. Петровско-Разумовская 17',
	},
	{
		searchName: 'Сибирский проезд',
		fullName: 'ул. Сибирский проезд 10, к.2',
	},
	{
		searchName: 'Перервинский бульвар 27',
		fullName: 'ул. Перервинский бульвар 27, к.1',
	},
];

const Header = ({ isLoggedIn, onLogout }) => {
	const [address, setAddress] = useState('');
	const [search, setSearch] = useState('');
	const [autoCompleteSearches, setAutoCompleteSearches] = useState([]);
	const [addressesAutoComplete, setAddressesAutoComplete] = useState([]);

	const handleAddressChange = (e) => {
		const { value } = e.target;
		setAddress(value);
	};

	const handleAutoCompleteClick = ({ type, value }) => {
		if (type === 'search') {
			setSearch(value);
		} else {
			setAddress(value);
		}
	};

	const handleSearchChange = (e) => {
		const { value } = e.target;
		setSearch(value);
	};

	const handleAddToAutoComplete = (value) => {
		if (value && !addressesAutoComplete.includes(value)) {
			setAutoCompleteSearches((addressesAutoComplete) => {
				if (addressesAutoComplete.length > 2) {
					return [{ fullName: value }, ...addressesAutoComplete.slice(1)];
				}
				return [{ fullName: value }, ...addressesAutoComplete];
			});
		}
	};

	useEffect(() => {
		if (address.length > 2) {
			const similarAddresses = mockAddresses.filter(
				(mockAddress) =>
					mockAddress.searchName.startsWith(address) ||
					mockAddress.fullName.startsWith(address)
			);
			setAddressesAutoComplete(similarAddresses);
		} else if (addressesAutoComplete.length) {
			setAddressesAutoComplete([]);
		}
	}, [address, addressesAutoComplete.length]);

	return (
		<header className={classes.container}>
			<div className={classes.logoContainer}>
				<Logo />
			</div>
			<HeaderInput
				placeholder='Введите адрес доставки'
				icon={<AddressIcon />}
				label='Адрес доставки'
				onChange={handleAddressChange}
				autoCompleteData={addressesAutoComplete}
				onAutoCompleteClick={handleAutoCompleteClick}
				value={address}
			/>
			<HeaderInput
				placeholder='Название, кухня, ресторан...'
				label='Поиск'
				icon={<SearchIcon />}
				type='search'
				onAutoCompleteClick={handleAutoCompleteClick}
				onChange={handleSearchChange}
				autoCompleteData={autoCompleteSearches}
				value={search}
				onAddToAutoComplete={handleAddToAutoComplete}
			/>
			<Controls onLogout={onLogout} isLoggedIn={isLoggedIn} />
		</header>
	);
};

export default Header;

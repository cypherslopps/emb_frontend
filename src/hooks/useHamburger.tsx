import React, { useState } from 'react';

function useHamburger() {
	const [panelIsOpen, setPanelIsOpen] = useState<boolean>(false);

	return [panelIsOpen, setPanelIsOpen];
}

export default useHamburger;
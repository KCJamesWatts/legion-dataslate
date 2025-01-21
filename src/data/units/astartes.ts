/**
 * This file contains all of the Legiones Astartes unit data.
 * 
 * Units are ordered alphabetically, titled as they appear in
 * the book in which they are listed, books being separated by a comment.
 * 
 * Data ids are inside the range of 1000-1999.
**/

export const astartes: UnitDatasheet[] = [
    /**
     * Core Rulebook
     */
    {
        id: 1000,
        faction: null,
        army: Army.astartes,
        name: 'Assault Marines',
        unitType: {
            type: UnitType.infantry,
            value: 1
        },
        movement: '7"',
        save: 5,
        caf: 3,
        morale: 3,
        wounds: 1,
        weapons: [1000],
        specialRules: [
            { name: SpecialRules.independent },
            { name: SpecialRules.jumpPacks }
        ],
    }
];
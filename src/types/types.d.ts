/* eslint-disable @typescript-eslint/no-unused-vars */

enum Army {
    astartes = 'Legiones Astartes',
    solar = 'Solar Auxilia',
}

enum Faction {
    loyalist = 'Loyalist',
    traitor = 'Traitor',
}

enum UnitType {
    infantry = 'Infantry',
}

interface SpecialRule {
    name: SpecialRules;
    value?: number | string;
}

interface UnitDatasheet {
    id: number;
    army: Army;
    caf: number;
    faction: Faction | null;
    morale: number | null;
    movement: string;
    name: string;
    save: number;
    specialRules: SpecialRule[];
    unitType: {
        type: UnitType;
        value: number;
    };
    wounds: number;
    weapons: number[];
}

interface WeaponDatasheet {
    id: number;
    name: string;
    profile: WeaponProfile;
}

interface WeaponProfile {
    ap: number | string;
    dice: number | string | null;
    range: string;
    toHit: number | null;
    traits: WeaponTrait[];
}

interface WeaponTrait {
    name: WeaponTraits;
    value?: number | string;
}
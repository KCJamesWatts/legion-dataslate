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

interface UnitDatasheet {
    id: number;
    faction: Faction | null;
    army: Army;
    name: string;
    unitType: {
        type: UnitType;
        value: number;
    };
    movement: string;
    save: number;
    caf: number;
    morale: number | null;
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
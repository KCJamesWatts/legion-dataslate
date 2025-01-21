import css from './DemoPalette.module.scss';

const DemoPalette = () => {
    return <div className={css.container}>
        <h1>H1.title</h1>
        <h2>H2.title</h2>
        <h3>H3.title</h3>
        <h4>H4.title</h4>
        <h5>H5.title</h5>

        <hr />

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <div className={[css.panel, css.demo, css['panel-depth-0']].join(' ')}>.panel .panel-depth-0</div>
            <div className={[css.panel, css.demo, css['panel-depth-1']].join(' ')}>.panel .panel-depth-1</div>
            <div className={[css.panel, css.demo, css['panel-depth-2']].join(' ')}>.panel .panel-depth-2</div>
            <div className={[css.panel, css.demo, css['panel-depth-3']].join(' ')}>.panel .panel-depth-3</div>
            <div className={[css.panel, css.demo, css['panel-depth-4']].join(' ')}>.panel .panel-depth-4</div>       
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>       
            <div className={[css.panel, css.demo, css['panel-depth-6']].join(' ')}>.panel .panel-depth-6</div>       
            <div className={[css.panel, css.demo, css['panel-depth-8']].join(' ')}>.panel .panel-depth-8</div>       
            <div className={[css.panel, css.demo, css['panel-depth-12']].join(' ')}>.panel .panel-depth-12</div>
            <div className={[css.panel, css.demo, css['panel-depth-16']].join(' ')}>.panel .panel-depth-16</div>
            <div className={[css.panel, css.demo, css['panel-depth-24']].join(' ')}>.panel .panel-depth-24</div>
        </div>

        <hr />

        <table>
            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                    <th>Header 4</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={4}>

                    </td>
                </tr>
            </tfoot>
        </table>

        <hr />

        <div className={[css.panel, css['panel-depth-12']].join(' ')}>
            <h1>H1.title</h1>

            <table>
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                        <th>Header 4</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={4}>

                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <hr />

        <div className={[css['dataslate'], css['background-gradient']].join(' ')}>
            <div className={css['unit-name-type']}>
                <span className={css['unit-name']}>Tactical Legionnaries</span>
                <span className={css['unit-type']}>Infantry (1)</span>
            </div>

            <div className={css['unit-profile']}>
                <table className={css['unit-profile']}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Move</th>
                            <th>Save</th>
                            <th>CAF</th>
                            <th>Morale</th>
                            <th>W</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tactical Legionnaries</td>
                            <td>5"</td>
                            <td>5+</td>
                            <td>+2</td>
                            <td>3+</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={css['weapon-profile']}>
                <table className={css['weapon-profile']}>
                    <thead>
                        <tr>
                            <th>Weapon</th>
                            <th>Range</th>
                            <th>Dice</th>
                            <th>To Hit</th>
                            <th>AP</th>
                            <th>Traits</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Legion Bolter</td>
                            <td>8"</td>
                            <td>1</td>
                            <td>5+</td>
                            <td>0</td>
                            <td>Assault, Light</td>
                        </tr>

                        <tr className={css['alternating-row']}>
                            <td>Plasma Gun</td>
                            <td>10"</td>
                            <td>1</td>
                            <td>4+</td>
                            <td>-1</td>
                            <td>Light AT</td>
                        </tr>

                        <tr>
                            <td rowSpan={2}>Missile Launcher</td>
                            <td>20"</td>
                            <td>2</td>
                            <td>4+</td>
                            <td>0</td>
                            <td>Ignores Cover, Light</td>
                        </tr>

                        <tr className={css['has-row-span']}>
                            <td>20"</td>
                            <td>1</td>
                            <td>4+</td>
                            <td>-1</td>
                            <td>Anti-Tank</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default DemoPalette;
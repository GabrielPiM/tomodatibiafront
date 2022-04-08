import { Component, OnInit } from '@angular/core';
import { ClientVersion } from './feature-components/hunt-versions/hunt-versions.component';

@Component({
  selector: 'app-hunt-add',
  templateUrl: './hunt-add.component.html',
  styleUrls: ['./hunt-add.component.css'],
})
export class HuntAddComponent implements OnInit {
  constructor() {}

  diffChangedHandler(diff: number) {
    this.hunt.difficulty = diff;
  }

  versionChangedHandler(version: ClientVersion[]) {
    this.hunt.huntClientVersions = version;
  }

  //#region hunt objct
  hunt = {
    id: 0,
    name: 'Hunt One',
    idAuthor: 0,
    location: 'location',
    levelMinReq: 0,
    xpHr: 10000,
    tutorialVideoUrl: 'https://www.youtube.com/watch?v=0cs_wheBIvs',
    difficulty: 5,
    teamSize: 0,
    idSituation: 0,
    isPremium: true,
    huntClientVersions: [
      {
        id: 1,
        idClientVersion: 1,
      },
    ],
    huntDescs: [
      {
        id: 0,
        title: 'title 1',
        paragraph: 'paragraph 1',
      },
    ],
    huntMonsters: [
      {
        id: 0,
        idMonster: 1,
        qty: 5,
      },
    ],
    huntSpecialReqs: [
      {
        id: 0,
        idType: 1,
        value: 'Key_001.gif',
        qty: 1,
      },
    ],
    players: [
      {
        id: 0,
        vocation: 1,
        level: 150,
        function: 'Tanker',
        equipaments: [
          {
            id: 0,
            idPlayer: 0,
            amulet: 'Amulet',
            bag: 'string',
            helmet: 'string',
            armor: 'string',
            weaponRight: 'string',
            weaponLeft: 'string',
            ring: 'string',
            legs: 'string',
            boots: 'string',
            ammo: 'string',
          },
        ],
        playerImbuements: [
          {
            id: 0,
            idImbuement: 1,
            idImbuementLevel: 1,
            qty: 1,
          },
        ],
        playerItems: [
          {
            id: 0,
            idItem: 1,
            qty: 2,
          },
        ],
        playerPreys: [
          {
            id: 0,
            idPrey: 1,
            idMonster: 1,
            reccStar: 5,
          },
        ],
      },
    ],
  };
  //#endregion

  ngOnInit(): void {}
}

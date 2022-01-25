import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hunt-difficulty',
  templateUrl: './hunt-difficulty.component.html',
  styleUrls: ['./hunt-difficulty.component.css'],
})
export class HuntDifficultyComponent implements OnInit {
  constructor() {}

  @Output() difficultyEvent = new EventEmitter<number>();

  //#region  variables
  difficulty: number = 10;
  lastDiff: number = 10;

  faStar = faStar;
  faStarR = faStarR;

  //#endregion
  //#region Control methods

  counter(i: number) {
    return new Array(i);
  }

  SetDifficulty(i: number) {
    this.difficulty = (i + 1) * 10;
    this.lastDiff = this.difficulty;

    this.difficultyEvent.emit(this.difficulty);
  }

  HoverDifficulty(i: number) {
    this.difficulty = (i + 1) * 10;
  }

  LeaveDifficulty() {
    this.difficulty = this.lastDiff;
  }

  //#endregion

  ngOnInit(): void {}
}

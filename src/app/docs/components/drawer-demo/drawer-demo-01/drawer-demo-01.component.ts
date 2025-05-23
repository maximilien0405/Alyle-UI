import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LyDrawerMode } from '@alyle/ui/drawer';

const styles = {
  drawerContainer: {
    height: '270px',
    transform: 'translate3d(0,0,0)'
  },
  drawerContent: {
    padding: '1em'
  }
};

@Component({
  selector: 'drawer-demo-01',
  templateUrl: './drawer-demo-01.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class DrawerDemo01Component {
  classes = this._theme.addStyleSheet(styles);
  mode: LyDrawerMode = 'side';
  hasBackdrop: boolean | null = null;

  constructor(private _theme: LyTheme2) { }
}

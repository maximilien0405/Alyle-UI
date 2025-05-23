import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormArray, UntypedFormControl, AbstractControl } from '@angular/forms';
import { LyTheme2 } from '@alyle/ui';

const styles = ({
  form: {
    maxWidth: '320px',
    margin: '0 auto'
  }
});

export interface Fruit {
  name: string;
  disabled?: boolean;
}


@Component({
  selector: 'aui-complex-checkbox',
  templateUrl: './complex-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class ComplexCheckboxComponent {
  readonly classes = this.theme.addStyleSheet(styles);
  fruits: Fruit[] = [
    { name: 'Apple' },
    { name: 'Banana', disabled: true },
    { name: 'Cherry' },
    { name: 'Mango', disabled: true },
    { name: 'Orange' },
    { name: 'Pineapple' },
    { name: 'Strawberry' }
  ];
  form: UntypedFormGroup = new UntypedFormGroup({
    fruits: new UntypedFormArray(
      this.fruits
      .map((val) => new UntypedFormControl({
        value: Math.floor(Math.random() * 11) > 5,
        disabled: val.disabled
      }))
    )
  });
  fruitsAbstractControlArray: AbstractControl[] = (this.form.get('fruits') as UntypedFormArray).controls;

  get selectedFruits() {
    const fruits = this.fruits.filter(_ => !_.disabled);
    if (fruits.length === 0) {
      return [];
    }
    return this.form.value.fruits
        .map((bool, index) => bool ? fruits[index].name : null)
        .filter(bool => bool !== null);
  }

  constructor(
    private theme: LyTheme2
  ) { }

  onDisableChange(fruitControl: AbstractControl, checked: boolean, index: number) {
    const fruits = this.fruits;
    fruits[index].disabled = checked;
    if (checked) {
      fruitControl.disable();
    } else {
      fruitControl.enable();
    }
  }

}

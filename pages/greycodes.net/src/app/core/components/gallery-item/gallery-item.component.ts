import {
  Component,
  computed,
  HostBinding,
  input,
  Optional,
} from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-gallery-item',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.scss',
})
export class GalleryPhotoComponent {
  public readonly galleryImage = input<string | undefined>();
  public readonly galleryWidth = input<number | undefined>();
  public readonly galleryHeight = input<number | undefined>();

  public readonly aspectRatio = input.required<number>();
  public readonly scale = input<number>(1);
  private readonly width = computed(
    () =>
      `${(this.gallery?.baseWidth() ?? 1) * this.aspectRatio() * this.scale()}`
  );
  public readonly pseudoPadding = computed(
    () => `${((1 / this.aspectRatio()) * 100).toPrecision(3)}%`
  );

  @HostBinding('style.aspect-ratio')
  get styleAspectRatio() {
    return this.aspectRatio();
  }

  @HostBinding('style.width.rem')
  get styleWidth() {
    return this.width();
  }

  @HostBinding('style.flex-grow')
  get styleFlexGrow() {
    return this.aspectRatio() * 100;
  }

  constructor(@Optional() private gallery?: GalleryComponent) {}
}

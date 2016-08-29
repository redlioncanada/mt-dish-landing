import {Component} from 'angular2/core'
import {AppDataService} from './services/appdata.service'

@Component({
    selector: 'legal',
    template: `
        <div class="row {{!enabled ? 'hide': ''}}">
            <p *ngFor="#l of legal;" [innerHTML]="l"></p>
        </div>
    `,
})

export class Legal {
    private enabled: boolean
    private legal: any

    constructor(private appdata: AppDataService) {
        this.enabled = true
        var data = appdata.get()
        this.enabled = data.legal.enabled
        this.legal = data.legal.text
    }
}
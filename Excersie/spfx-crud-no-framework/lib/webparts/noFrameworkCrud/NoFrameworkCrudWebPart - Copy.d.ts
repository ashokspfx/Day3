import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface INoFrameworkCrudWebPartProps {
    listName: string;
}
export default class NoFrameworkCrudWebPart extends BaseClientSideWebPart<INoFrameworkCrudWebPartProps> {
    private listItemEntityTypeName;
    render(): void;
    private setButtonsEventHandlers();
    private createItem();
    private updateStatus(status, items?);
    private updateItemsHtml(items);
    private readItem();
    private updateItem();
    private deleteItem();
    private getLatestItemId();
    private getListItemEntityTypeName();
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}

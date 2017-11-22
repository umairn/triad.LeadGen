import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
  } from '@microsoft/sp-webpart-base';

import * as strings from 'LeadgenWebPartStrings';
import Leadgen from './components/Leadgen';
import { ILeadgenProps } from './components/ILeadgenProps';
import { ILeadgenWebPartProps } from './ILeadgenWebPartProps';


export default class LeadgenWebPart extends BaseClientSideWebPart<ILeadgenWebPartProps> {


  public render(): void {
    const element: React.ReactElement<ILeadgenProps > = React.createElement(
      Leadgen,
      {
        description: this.properties.description,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneSlider ('numberofDocuments',{
                  label:strings.NumberOfDocumentsFieldLabel,
                  min:1,
                  max:10,
                  step:1
                })

              ]
            }
          ]
        }
      ]
    };
  }
}

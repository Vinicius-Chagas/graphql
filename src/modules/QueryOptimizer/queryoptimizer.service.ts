/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { GraphQLResolveInfo, Kind, SelectionNode } from 'graphql';

@Injectable()
export class QueryOptimizerService {
  private extractRequestedFields(info: GraphQLResolveInfo): string[] {
    const fields: string[] = [];

    const collectFields = (selectionSet?: readonly SelectionNode[]) => {
      if (!selectionSet) return;

      selectionSet.forEach((selection) => {
        if (selection.kind === Kind.FIELD) {
          const fieldNode = selection;

          if (fieldNode.name.value !== '__typename') {
            fields.push(fieldNode.name.value);

            if (fieldNode.selectionSet) {
              collectFields(fieldNode.selectionSet.selections);
            }
          }
        }
      });
    };

    const rootFields = info.fieldNodes[0]?.selectionSet?.selections;
    collectFields(rootFields);

    return fields;
  }

  private createDatabaseSelectObject(selectedFields: string[]): Record<string, boolean> {
    return selectedFields.reduce<Record<string, boolean>>((acc, field) => {
      acc[field] = true;
      return acc;
    }, {});
  }

  public generateSelect(info: GraphQLResolveInfo): Record<string, boolean> {
    const selectedFields = this.extractRequestedFields(info);
    return this.createDatabaseSelectObject(selectedFields);
  }
}

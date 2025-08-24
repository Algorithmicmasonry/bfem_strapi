import type { Schema, Struct } from '@strapi/strapi';

export interface NameActivity extends Struct.ComponentSchema {
  collectionName: 'components_name_activities';
  info: {
    displayName: 'activity';
  };
  attributes: {
    activityName: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'name.activity': NameActivity;
    }
  }
}

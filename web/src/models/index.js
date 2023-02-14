// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Session, SessionSection, Session2, SessionSection2 } = initSchema(schema);

export {
  Session,
  SessionSection,
  Session2,
  SessionSection2
};
import extend from 'lodash/extend';
import bind from 'lodash/bind';

class Types {
  types = {};

  parse(type, value = null) {
    if (!this.types[type]) {
      this.types[type] = value || type;
    }
    return this.types[type];
  }
}

function createInstance(defaults) {
  const context = new Types(defaults);
  const instance = bind(Types.prototype.parse, context);

  extend(instance, Types.prototype, context);

  extend(instance, context);

  return instance;
}

const types = createInstance();

export default types;

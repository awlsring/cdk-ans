export class VariableCollection {
  private variables: Record<string, string> = {};

  constructor(variables: Record<string, string>) {
    this.variables = variables;
  }

  /**
   * Set a variable in the collection
   */
  set(variable: string, value: string): void {
    this.variables[variable] = value;
  }

  /**
   * Get a variable from the collection. Returns formatted as an Ansible variable
   */
  get(variable: string): string {
    const v = this.variables[variable];
    if (!v) {
      throw new Error(`Variable ${variable} is not defined`);
    }
    return `{{ ${v} }}`;
  }

  /**
   * Get a variable from the collection. Returns raw value
   */
  getRaw(variable: string): string {
    const v = this.variables[variable];
    if (!v) {
      throw new Error(`Variable ${variable} is not defined`);
    }
    return v;
  }
}
// https://stackoverflow.com/questions/67351713/how-to-retry-with-different-url-if-request-returns-an-error/67351834#67351834


class UserService {
  private getData(param, tried=3) {
    const url = (name: string) => {
      `https:///website.com/${name}/data`;
    }

    return this.http.get<Data>(url(param)).pipe(catchError(error => {
      if (tried < 0) {
        throw error;
      }
      // assign name, param's property as a new value
      param.name = 'newName';
      // then, call again with param with another name 
      // while tried counter to be 0
      this.getData(param, tried - 1);
    }));  
  }
}
componentDidMount(){
            document.title = `Clicked ${this.state.count} times`;

    }
    componentDidUpdate(){
        document.title = `Clicked ${this.state.count} times`
    }

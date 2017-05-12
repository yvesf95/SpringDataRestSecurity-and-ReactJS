import React from 'react';
import { Button } from 'react-bootstrap';

import MyNavbar from './layout/nav';
import Sidebar from './layout/sidebar';
import CreateDialog from './layout/create-dialog';
import DeleteDialog from './layout/delete-dialog';

const root = 'http://localhost:3000/api';

export default class Layout extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedEntities: [], entities: [], attributes: [], names: [], links: [],
            pageSize: 0, totalElements: 0, totalPages: 0, pageNumber: 0,
            toggled: false, showCreateDialog: false, showDeleteDialog: false
        };
        this.loadFromServer = this.loadFromServer.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onDeselect = this.onDeselect.bind(this);
        this.updatePageSize = this.updatePageSize.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.openCreateDialog = this.openCreateDialog.bind(this);
        this.closeCreateDialog = this.closeCreateDialog.bind(this);
        this.openDeleteDialog = this.openDeleteDialog.bind(this);
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
    }

    loadFromServer(params={}){
        let attributes, names=[], links, pageSize, totalElements, totalPages, pageNumber;
        let pathname = this.props.location.pathname;
        let entityName = pathname.substr(1);
        let url = new URL(root + pathname);
        Object.keys(params).forEach((key) => { url.searchParams.append(key, params[key]) });
        console.log("URL:", url.toString());
        fetch(url.toString()).then((response) => {
            return response.json();
        }).then((responseJson) => {
            return fetch(responseJson._links.profile.href, {
                method: 'GET',
                headers: {'Accept': 'application/schema+json'}
            }).then((response) => {
                return response.json();
            }).then((schema) => {
                attributes = Object.keys(schema.properties);
                attributes.forEach((attr) => {names[attr] = schema.properties[attr].title});
                links = responseJson._links;
                pageSize = responseJson.page.size;
                totalElements = responseJson.page.totalElements;
                totalPages = responseJson.page.totalPages;
                pageNumber = responseJson.page.number;
                return responseJson;
            });
        }).then((responseJson) => {
            return responseJson._embedded[entityName].map((entity) => {
                return fetch(entity._links.self.href).then((response) => {
                    return response.json();
                })
            });
        }).then((promises) => {
            return Promise.all(promises)
        }).then((entities) => {
            this.setState({ entities, attributes, links, names, pageSize, totalElements, totalPages, pageNumber });
            this.logStates();
        }).catch((error) => {
            alert(error);
        });
    }

    onCreate(entity){
        let pathname = this.props.location.pathname;
        let url = root + pathname;
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( entity )
        }).then(() => {
            this.loadFromServer({ page: this.state.pageNumber });
        }).catch((error) => {
            alert(error);
        });
    }

    onUpdate(entity, updatedEntity){
        fetch(entity._links.self.href, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'If-Match': entity.headers.get("ETag")
            },
            body: JSON.stringify( updatedEntity )
        }).then(() => {
            this.loadFromServer({ page: this.state.pageNumber });
        }, (response) => {
            if (response.status == 412){
                alert('DENIED: Unable to update ' +
                    entity._links.self.href + '. Your copy is stale.');
            }
        });
    }

    onDelete(entities){
        let promise = entities.map((entity) => {
            return fetch(entity._links.self.href, {
                method: 'DELETE'
            }).then((response) => {
                return response;
            }).catch((error) => {
                alert(error);
            });
        });
        Promise.all(promise).then(() => {
            this.loadFromServer({ page: this.state.pageNumber });
        })
        
    }

    onSearch(params={}){
        let urlString = ''
    }

    onSelect(selectedEntity){
        const selectedEntities = this.state.selectedEntities;
        selectedEntities.push(selectedEntity);
        this.setState({ selectedEntities });
    }

    onDeselect(selectedEntity){
        const selectedEntities = this.state.selectedEntities;
        const index = selectedEntities.indexOf(selectedEntity);
        selectedEntities.splice(index, 1);
        this.setState({ selectedEntities });
    }

    clearSelected(){
        const selectedEntities = [];
        this.setState({ selectedEntities });
    }

    updatePageSize(pageSize){
        this.setState({ pageSize });
    }
    
    formatName(attributes){
        const names = [];
        attributes.forEach((attr) => {
            for (let i = 0; i < attr.length; i++){
                let letter = attr.charAt(i);
                if (letter == letter.toUpperCase()){
                    attr = attr.replace(letter, " " + letter.toUpperCase());
                    i++;
                }
            }
            let firstLetter = attr.charAt(0);
            if (firstLetter.match(/[a-z]/)){
                attr = attr.replace(firstLetter, firstLetter.toUpperCase());
            }
            names.push(attr);
        });
        return names;
    }

    toggleSidebar(){
        const toggled = !this.state.toggled;
        this.setState({ toggled });
    }
  
    openCreateDialog(){
        this.setState({ showCreateDialog: true })
    }

    closeCreateDialog(){
        this.setState({ showCreateDialog: false })
    }

    openDeleteDialog(){
        this.setState({ showDeleteDialog: true })
    }

    closeDeleteDialog(){
        this.setState({ showDeleteDialog: false })
    }
    
    logStates(){
        console.log("State:", this.state);
    }

    render(){
        console.log(this.props);
        const toggleClass = this.state.toggled ? "toggled" : "";
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                state: this.state,
                openCreateDialog: this.openCreateDialog,
                openDeleteDialog: this.openDeleteDialog,
                loadFromServer: this.loadFromServer,
                onCreate: this.onCreate,
                onDelete: this.onDelete,
                onSelect: this.onSelect,
                onDeselect: this.onDeselect,
                updatePageSize: this.updatePageSize,
                selectedEntities: this.state.selectedEntities,
                entities: this.state.entities,
                attributes: this.state.attributes,
                names: this.state.names,
                links: this.state.links,
                pageSize: this.state.pageSize,
                totalElements: this.state.totalElements,
                totalPages: this.state.totalPages,
                pageNumber: this.state.pageNumber,
                query: this.props.location.query
            })
        );
        console.log(childrenWithProps);

        return(
            <div id="wrapper" className={toggleClass}>
                <Sidebar toggleSidebar={this.toggleSidebar} />
                <MyNavbar location={this.props.location}
                          toggleSidebar={this.toggleSidebar} />
                <div id="content-wrapper">
                    {childrenWithProps}
                    <CreateDialog names={this.state.names} 
                                  attributes={this.state.attributes} 
                                  showCreateDialog={this.state.showCreateDialog} 
                                  closeCreateDialog={this.closeCreateDialog} 
                                  onCreate={this.onCreate} />
                    <DeleteDialog selectedEntities={this.state.selectedEntities}
                                  showDeleteDialog={this.state.showDeleteDialog}
                                  closeDeleteDialog={this.closeDeleteDialog}
                                  onDelete={this.onDelete} />
                </div>
            </div>
        );
    }
}
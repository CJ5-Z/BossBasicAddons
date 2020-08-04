let _modPath;

exports.initialize = (modPath) => {
    _modPath = modPath;

    //New components
        //Developer
            //Basic
    ComponentNames.BasicInterface = 'basicinterface';
    Components.push({
        name: ComponentNames.BasicInterface,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/developer/basicinterface.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 2
    });
    ComponentNames.BackgroundTasks = 'backgroundtasks';
    Components.push({
        name: ComponentNames.BackgroundTasks,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/developer/backgroundtasks.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.HTMLComponent = 'htmlcomponent';
    Components.push({
        name: ComponentNames.HTMLComponent,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/developer/htmlcomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 3
    });
    ComponentNames.BasicFeatureUpgrader = 'basicfeatureupgrader';
    Components.push({
        name: ComponentNames.BasicFeatureUpgrader,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/developer/basicfeatureupgrader.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 2
    });
        //Designer
            //Basic
    ComponentNames.CSSComponent = 'csscomponent';
    Components.push({
        name: ComponentNames.CSSComponent,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/designer/csscomponent.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 2
    });
    ComponentNames.AestheticsComponent = 'aestheticscomponent';
    Components.push({
        name: ComponentNames.AestheticsComponent,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/designer/aestheticscomponent.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 2
    });
        //Lead Developer
            //Basic
    ComponentNames.FrameworkModule = 'frameworkmodule';
    Components.push({
        name: ComponentNames.FrameworkModule,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/leaddev/frameworkmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'basicinterface': 1,
            'htmlcomponent': 1,
            'backgroundtasks': 1,
            'BackendComponent': 1
        }
    });
    ComponentNames.AestheticsModule = 'aestheticsmodule';
    Components.push({
        name: ComponentNames.AestheticsModule,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/leaddev/aestheticsmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'BlueprintComponent': 1,
            'GraphicsComponent': 1,
            'csscomponent': 1,
            'aestheticscomponent': 1
        }
    });
    ComponentNames.FeatureUpgrader = 'featureupgrader';
    Components.push({
        name: ComponentNames.FeatureUpgrader,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/leaddev/featureupgrader.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'basicfeatureupgrader': 2
        }
    });
    ComponentNames.FeatureFinalizer = 'featurefinalizer';
    Components.push({
        name: ComponentNames.FeatureFinalizer,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/leaddev/featurefinalizer.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'basicfeatureupgrader': 1,
            'basicinterface': 1
        }
    });

    //Including research for new items
        //Developer
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerDevkit).unlocks.push(
        ComponentNames.BasicInterface,
        ComponentNames.BackgroundTasks,
        ComponentNames.HTMLComponent,
        ComponentNames.BasicFeatureUpgrader
    )
        //Designer
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerDesignerKit).unlocks.push(
        ComponentNames.CSSComponent,
        ComponentNames.AestheticsComponent
    )
        //Lead Developer
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerLeadDevkit).unlocks.push(
        ComponentNames.FrameworkModule,
        ComponentNames.AestheticsModule,
        ComponentNames.FeatureUpgrader,
        ComponentNames.FeatureFinalizer
    )

    //New recipes for existing modules
        //Lead Developer
            //Beginner Modules
    Components.find(component => component.name == ComponentNames.InterfaceModule).requirements = 
    {
        "UiElement": 2,
        "WireframeComponent": 1,
        "basicinterface": 1
    }
    Components.find(component => component.name == ComponentNames.FrontendModule).requirements = 
    {
        "InterfaceModule": 1,
        "htmlcomponent": 1,
        "backgroundtasks": 1
    }
    Components.find(component => component.name == ComponentNames.BackendModule).requirements = 
    {
        "BackendComponent": 1,
        "NetworkComponent": 1,
        "basicinterface": 1
    }
    Components.find(component => component.name == ComponentNames.InputModule).requirements = 
    {
        "UiComponent": 1,
        "BackendComponent": 1,
        "backgroundtasks": 1,
        "aestheticscomponent": 1
    }
    Components.find(component => component.name == ComponentNames.ContentManagementModule).requirements = 
    {
        "FrontendModule": 1,
        "InputModule": 1,
        "backgroundtasks": 3,
        "basicinterface": 3,
        "csscomponent": 1
    }
    Components.find(component => component.name == ComponentNames.VideoPlaybackModule).requirements = 
    {
        "VideoComponent": 1,
        "FrontendModule": 1,
        "basicinterface": 1,
        "htmlcomponent": 1,
        "aestheticscomponent": 1,
        "csscomponent": 1
    }

    //Feature Recipe Edits
    Object.assign(Features.find(feature => feature.name == FeatureNames.LandingPage).requirements,
        {
            "uicomponent": 1,
            "backendcomponent": 1,
            "blueprintcomponent": 1,
            "graphicscomponent": 1,
            "aestheticscomponent": 1,
            "basicfeatureupgrader": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.LiveStreaming).requirements,
        {
            "BackendModule": 1,
            "FrontendModule": 1,
            "NetworkComponent": 1,
            "featureupgrader": 1,
            "featurefinalizer": 1
        }
    )

    //Localizor and Load
    exports.onLoadGame = settings => {
        Helpers.showMessage('Welcome to Boss Basic Addons. This mod ads components, modules and production, in addition to changing existing recipes in order to add a layer of complexity to the base game. This mod is a dependency for other mods in the Boss Suite. It is recommended to have Infinite Workstations enabled. Questions, concerns, and bug reports should be brought to cj5bossprofessional@gmail.com .');

        $rootScope = GetRootScope();
        if($rootScope.options.language === "en"){
            //Developer
                //Basic
            Language['basicinterface'] = "Basic Interface";
            Language['backgroundtasks'] = "Background Tasks";
            Language['htmlcomponent'] = "HTML Component";
            Language['basicfeatureupgrader'] = "Basic Feature Upgrader";
            //Designer
                //Basic
            Language['csscomponent'] = "CSS Component";
            Language['aestheticscomponent'] = "Aesthetics Component";
            //Lead Developer
                //Basic
            Language['frameworkmodule'] = "Framework Module";
            Language['aestheticsmodule'] = "Aesthetics Module";
            Language['featureupgrader'] = "Feature Upgrader";
            Language['featurefinalizer'] = "Feature Finalizer";
        }
    }
}
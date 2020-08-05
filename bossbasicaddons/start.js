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
            //Intermediate
    ComponentNames.DatabaseBacking = 'databasebacking';
    Components.push({
        name: ComponentNames.DatabaseBacking,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/developer/databasebacking.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 8
    });
    ComponentNames.ProcessHandler = 'processhandler';
    Components.push({
        name: ComponentNames.ProcessHandler,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/developer/processhandler.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 10
    });
        //Expert
    ComponentNames.EfficiencyComponent = 'efficiencycomponent';
    Components.push({
        name: ComponentNames.EfficiencyComponent,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/developer/efficiencycomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 24
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
           //Intermediate
    ComponentNames.CondensedFeatures = 'condensedfeatures';
    Components.push({
        name: ComponentNames.CondensedFeatures,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/leaddev/condensedfeatures.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'backgroundtasks': 1,
            'aestheticscomponent': 1,
            'frameworkmodule': 1,
            'featurefinalizer': 1,
            'DatabaseLayer': 1
        }
    });
        //SysAdmin
            //Basic
    ComponentNames.BasicSecuritySystem = 'basicsecuritysystem';
    Components.push({
        name: ComponentNames.BasicSecuritySystem,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'graphics/sysadmin/basicsecuritysystem.png',
        employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 2
    }); 
            //Intermediate    
    ComponentNames.ConstantMonitor = 'constantmonitor';
    Components.push({
        name: ComponentNames.ConstantMonitor,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/sysadmin/constantmonitor.png',
        employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 10
    }); 
    ComponentNames.MonitorSet = 'monitorset';
    Components.push({
        name:ComponentNames.MonitorSet,
        employeeLevel:Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/sysadmin/monitorset.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Module,
        requirements:{
            'basicsecuritysystem': 2,
            'contantmonitor': 1,
            'ContinuousIntegration': 1
        }
    });
            //Expert
    ComponentNames.MaintenancePack = 'maintenancepack';
    Components.push({
        name:ComponentNames.MaintenancePack,
        employeeLevel:Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/sysadmin/maintenancepack.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Module,
        requirements: {
            'basicsecuritysystem': 2,
            'ProcessManagement': 1,
            'monitorset': 1
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
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateDevkit).unlocks.push(
        ComponentNames.DatabaseBacking,
        ComponentNames.ProcessHandler
    )
    ResearchItems.find(item => item.name == ResearchItemNames.ExpertDevkit).unlocks.push(
        ComponentNames.EfficiencyComponent
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
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateLeadDevkit).unlocks.push(
        ComponentNames.CondensedFeatures
    )
        //SysAdmin
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerSysAdminKit).unlocks.push(
        ComponentNames.BasicSecuritySystem
    )
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateSysAdminKit).unlocks.push(
        ComponentNames.MonitorSet,
        ComponentNames.ConstantMonitor
    )
    ResearchItems.find(item => item.name == ResearchItemNames.ExpertSysAdminKit).unlocks.push(
        ComponentNames.MaintenancePack
    )

    //New recipes for existing Designer modules
        //Intermediate
    Components.find(component => component.name == ComponentNames.UiSet).requirements = 
    {
        "WireframeComponent": 2,
        "UiElement": 2,
        "csscomponent": 2
    }

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
            //Intermediate Modules
    Components.find(component => component.name == ComponentNames.SeoModule).requirements = 
    {
        "FrontendModule": 1,
        "SemanticComponent": 1,
        "backgroundtasks": 1,
        "processhandler": 1
    }
    Components.find(component => component.name == ComponentNames.EmailModule).requirements = 
    {
        "SmtpComponent": 1,
        "BackendModule": 1,
        "processhandler": 1
    }
    Components.find(component => component.name == ComponentNames.DatabaseLayer).requirements = 
    {
        "DatabaseComponent": 1,
        "BackendComponent": 2,
        "NetworkComponent": 1,
        "databasebacking": 1
    }
    Components.find(component => component.name == ComponentNames.NotificationModule).requirements = 
    {
        "UIComponent": 1,
        "BackendComponent": 1,
        "NetworkComponent": 1,
        "csscomponent": 1
    }
    Components.find(component => component.name == ComponentNames.AuthenticationModule).requirements = 
    {
        "DatabaseComponent": 1,
        "EncryptionComponent": 1,
        "BackendModule": 1,
        "basicinterface": 1,
        "processhandler": 1,
        "frameworkmodule": 1
    }
            //Expert Modules
    Components.find(component => component.name == ComponentNames.PaymentGatewayModule).requirements = 
    {
        "DatabaseLayer": 1,
        "ApiClientModule": 1,
        "AuthenticationModule": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1
    }
    Components.find(component => component.name == ComponentNames.LocalizationModule).requirements = 
    {
        "I18nComponent": 1,
        "FrontendModule": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1
    }
    Components.find(component => component.name == ComponentNames.SearchModule).requirements = 
    {
        "DatabaseComponent": 1,
        "SearchAlgorithmComponent": 1,
        "BackendComponent": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1
    }
    Components.find(component => component.name == ComponentNames.BandwidthCompressionModule).requirements = 
    {
        "CompressionComponent": 1,
        "NetworkComponent": 1,
        "BackendComponent": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1
    }
    Components.find(component => component.name == ComponentNames.CodeOptimizationModule).requirements = 
    {
        "BackendModule": 2,
        "DatabaseLayer": 2,
        "FrontendModule": 2,
        "condensedfeatures": 1,
        "efficiencycomponent": 1
    }
    Components.find(component => component.name == ComponentNames.ApiClientModule).requirements = 
    {
        "BackendModule": 1,
        "DatabaseLayer": 1,
        "CompressionComponent": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1
    }

    //New recipes for existing SysAdmin Modules
        //Expert
    Components.find(component => component.name == ComponentNames.VirtualContainer).requirements = 
    {
        "VirtualHardware": 1,
        "OperatingSystem": 1,
        "ProcessManagement": 1,
        "ContinuousIntegration": 1,
        "CronJob": 1,
        "monitorset": 1
    }
    Components.find(component => component.name == ComponentNames.Cluster).requirements = 
    {
        "VirtualContainer": 1,
        "Firewall": 6,
        "basicsecuritysystem": 1,
        "maintenancepack": 1
    }
    Components.find(component => component.name == ComponentNames.SwarmManagement).requirements = 
    {
        "Cluster": 1,
        "VirtualContainer": 1,
        "constantmonitor": 1,
        "monitorset": 1,
        "maintenancepack": 1
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
        //Getting to intermediates
    Object.assign(Features.find(feature => feature.name == FeatureNames.LiveStreaming).requirements,
        {
            "BackendModule": 1,
            "FrontendModule": 1,
            "NetworkComponent": 1,
            "featureupgrader": 1,
            "featurefinalizer": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.SharingFunctionality).requirements,
        {
            "BackendModule": 1,
            "FrontendModule": 1,
            "InputModule": 1,
            "EmailModule": 1,
            "UiSet": 1,
            "condensedfeatures": 1,
            "featureupgrader": 1,
            "featurefinalizer": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.OfflineContent).requirements,
        {
            "BackendModule": 2,
            "FrontendModule": 1,
            "StorageModule": 2,
            "DatabaseLayer": 2,
            "UiSet": 1,
            "condensedfeatures": 1,
            "featureupgrader": 1,
            "featurefinalizer": 1
        }
    )
        //Getting to experts
    Object.assign(Features.find(feature => feature.name == FeatureNames.PaymentSystem).requirements,
        {
            "DatabaseLayer": 2,
            "FrontendModule": 1,
            "PaymentGatewayModule": 1,
            "EmailModule": 1,
            "DesignGuidelines": 1,
            "condensedfeatures": 1,
            "featureupgrader": 1,
            "featurefinalizer": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.ChatSystem).requirements,
        {
            "DatabaseLayer": 1,
            "InputModule": 1,
            "NotificationModule": 2,
            "NetworkComponent": 3,
            "ApiClientModule": 2,
            "DesignGuidelines": 1,
            "condensedfeatures": 1,
            "featureupgrader": 1,
            "featurefinalizer": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.HelpSystem).requirements,
        {
            "ContentManagementModule": 4,
            "InputModule": 4,
            "FrontendModule": 3,
            "BackendModule": 3,
            "UiSet": 2,
            "DesignGuidelines": 1,
            "condensedfeatures": 1,
            "featureupgrader": 1,
            "featurefinalizer": 1
        }
    )

    //Localizor and Load
    exports.onLoadGame = settings => {
        $rootScope = GetRootScope();
        if($rootScope.options.language === "en"){
            //Developer
                //Basic
            Language['basicinterface'] = "Basic Interface"; //Graphics Done
            Language['backgroundtasks'] = "Background Tasks"; //Graphics Done
            Language['htmlcomponent'] = "HTML Component"; //Graphics Done
            Language['basicfeatureupgrader'] = "Basic Feature Upgrader"; //Graphics Done
                //Intermediate
            Language['databasebacking'] = "Database Backing"; //Graphics Done
            Language['processhandler'] = "Process Handler"; //Graphics Done
                //Expert
            Language['efficiencycomponent'] = "Efficiency Component"; //Graphics Done
            //Designer
                //Basic
            Language['csscomponent'] = "CSS Component"; //Graphics Done
            Language['aestheticscomponent'] = "Aesthetics Component"; //Graphics Done
            //Lead Developer
                //Basic
            Language['frameworkmodule'] = "Framework Module"; //Graphics Done
            Language['aestheticsmodule'] = "Aesthetics Module"; //Graphics Done
            Language['featureupgrader'] = "Feature Upgrader"; //Graphics Done
            Language['featurefinalizer'] = "Feature Finalizer"; //Graphics Done
                //Intermediate
            Language['condensedfeatures'] = "Condensed Features"; //Graphics Done
            //SysAdmin
                //Basic
            Language['basicsecuritysystem'] = "Basic Security System"; //Graphics Done
                //Intermediate
            Language['constantmonitor'] = "Constant Monitor"; //Graphics Done
            Language['monitorset'] = "Monitor Set"; //Graphics Done
                //Expert
            Language['maintenancepack'] = "Maintenance Pack"; //Graphics Done
        }
    }
}
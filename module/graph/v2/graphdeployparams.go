package v2

import (
	"hamster-client/module/application"
	"hamster-client/module/queue"
	"time"
)

type GraphDeployParameter struct {
	ID              uint                    `json:"id"`
	CreatedAt       time.Time               `json:"createdAt"`
	UpdatedAt       time.Time               `json:"updatedAt"`
	Network         string                  `json:"network"`         //rinkbey network or mainnet network
	LeaseTerm       int                     `json:"leaseTerm"`       //indexer-service、indexer-agent eth-url
	ThegraphIndexer string                  `json:"thegraphIndexer"` // mnemonic
	StakingAmount   int                     `json:"stakingAmount"`
	Application     application.Application `json:"application"`   //application entity
	ApplicationID   uint                    `json:"applicationId"` //application id
}

type AddParam struct {
	Name            string `json:"name"`           //apply name
	SelectNodeType  string `json:"selectNodeType"` //apply plugin
	LeaseTerm       int    `json:"leaseTerm"`
	ThegraphIndexer string `json:"thegraphIndexer"` // mnemonic
	StakingAmount   int    `json:"stakingAmount"`
}

type AddApplicationVo struct {
	ID     uint `json:"id"`
	Result bool `json:"result"`
}

type QueueInfo struct {
	Info []queue.StatusInfo `json:"info"`
}

type Service interface {
	SaveGraphDeployParameterAndApply(data AddParam) (AddApplicationVo, error)
	DeleteGraphDeployParameterAndApply(id int) (bool, error)
	RetryDeployGraphJob(applicationId int, runNow bool) error
	GetQueueInfo(applicationId int) (QueueInfo, error)
	GraphStart(appID int, deploymentID string) error
	GraphStop(appID int, deploymentID string) error
	GraphRules(appID int) ([]GraphRule, error)
}
